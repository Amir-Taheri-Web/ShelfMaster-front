const e2p = (s: string | number) =>
  //@ts-expect-error: no check
  s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]); //english to persian

const p2e = (
  s: string | number //persian to english
  //@ts-expect-error: no check
) => s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const sp = (num: string | number) => {
  //english to persian with comma separators
  const separatedNumber = num.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  //@ts-expect-error: no check
  const joinedNumber = separatedNumber.join(",");
  return e2p(joinedNumber);
};

export { e2p, p2e, sp };
