
export const isNumber = function(value?: any): boolean {
  return typeof value === "number";
}

export const isString = function(value?: any): boolean {
  return typeof value === "string";
}

export const isArray = function(value?: any) {
  if (value && Array.isArray(value)) {
    return true;
  }
  return false;
}

export const isObject = function(value?: any): boolean {
  if (value && typeof value === "object") {
    return true;
  }
  return false;
}
// 将字符转小写
export const toLower = function(value: string = ""): string {
  return value.toLowerCase();
}
// 将字符转大写
export const toUpper = function(value: string = ""): string {
  return value.toUpperCase();
}

// 首字符小写, 其余字符保持不变
export const lowerFirst = function(value: string): string {
  return value.replace(/^(\w)/, ($1: string) => toLower($1));
}

// 首字符大写, 其余字符保持不变
export const upperFirst = function(value: string): string {
  return value.replace(/^(\w)/, ($1: string) => toUpper($1));
}

// 将字符转为驼峰模式
export const camelCase = function(value: string): string {
  const text = value.replace(/([\s-_]+[a-zA-Z])/ig, ($1: string) => toUpper($1[$1.length - 1]));
  return lowerFirst(text);
}

export const hasIn = function(data: object, key: string) {
  if (data && isObject(data)) {
    return data.hasOwnProperty(key);
  }
  return false;
}

export const isPic = function(value: string | number): boolean {
  if (value === 0 || value === "0") {
    return true;
  }
  if (value) {
    return /^(pic-{0,})?\d+(\.[a-z]+)?$/i.test(String(value));
  }
  return false;
}