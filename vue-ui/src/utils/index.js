/* 将十六进制颜色转化为Rgba格式 */
export function hexToRgba(hex, opacity) {
  //hex："#3ba272"； opacity：透明度
  let RGBA =
    "rgba(" +
    parseInt("0x" + hex.slice(1, 3)) +
    "," +
    parseInt("0x" + hex.slice(3, 5)) +
    "," +
    parseInt("0x" + hex.slice(5, 7)) +
    "," +
    opacity +
    ")";
  return {
    rgba: RGBA,
  };
}
