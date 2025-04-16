export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <!-- Define the rounded rectangle mask -->
    <mask id="rounded-mask">
      <rect width="${w}" height="${h}" rx="10" ry="10" fill="white" />
    </mask>
    <!-- Define the gradient with transparency -->
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop stop-color="rgba(220, 220, 220, 0.4)" offset="0%" />
      <stop stop-color="rgba(200, 200, 200, 0.4)" offset="50%" />
      <stop stop-color="rgba(180, 180, 180, 0.4)" offset="100%" />
    </linearGradient>
  </defs>
  <!-- Static background with transparency -->
  <rect width="${w}" height="${h}" rx="10" ry="10" fill="rgba(200, 200, 200, 0.4)" />
  <!-- Gradient with animation, clipped by the mask -->
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" mask="url(#rounded-mask)" />
  <!-- Animate the gradient's horizontal movement -->
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="3s" repeatCount="indefinite" />
</svg>
`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
