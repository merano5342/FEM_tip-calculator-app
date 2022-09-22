
export const NUMBER_PATTERN =
  /^(0|[1-9][0-9]*)$/

export function isNumValidate(num) {
  return num ? false : NUMBER_PATTERN.test(num);
}
