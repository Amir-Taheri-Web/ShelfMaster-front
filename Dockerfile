# Base Node.js image
FROM node:20-alpine AS base

### Dependencies ###
FROM base AS deps

# Install necessary system dependencies
RUN apk add --no-cache libc6-compat git

# Install pnpm manually instead of using Corepack
RUN npm install -g pnpm

# Ensure pnpm is in the PATH
ENV PATH="/root/.npm-global/bin:$PATH"

WORKDIR /app

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prefer-frozen-lockfile

### Builder ###
FROM base AS builder

# Install necessary system dependencies
RUN apk add --no-cache libc6-compat git
RUN npm install -g pnpm  # Ensure pnpm is installed

WORKDIR /app

# Copy dependencies from previous stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables
ARG BASE_URL
ARG NEXT_PUBLIC_BASE_URL
ENV BASE_URL=${BASE_URL}
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}

# Build Next.js app
RUN pnpm build

### Production image (runner) ###
FROM base AS runner

# Set NODE_ENV to production
ENV NODE_ENV=production

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Create nextjs user and group
RUN addgroup nodejs
RUN adduser -SDH nextjs

# Create and set correct permissions for .next folder
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy build output and public assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Use non-root user
USER nextjs

# Set environment variables
ARG BASE_URL
ARG NEXT_PUBLIC_BASE_URL
ENV BASE_URL=${BASE_URL}
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}

# Expose port for application
EXPOSE 5000
ENV PORT=5000
ENV HOSTNAME="0.0.0.0"

# Healthcheck to monitor app status
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "wget", "-qO-", "http://localhost:3000/health" ]

# Run the Next.js standalone server
CMD ["node", "server.js"]