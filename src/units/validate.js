


export function isNumValidate(num) {
  const NUMBER_PATTERN = /^(0|[1-9][0-9]*)$/
  return !num ? false : NUMBER_PATTERN.test(num);
}
