
export const isNumber = function(value: any): boolean {
  return typeof value === "number";
}

export const isString = function(value: any): boolean {
  return typeof value === "string";
}

export const toLower = function(value: string): string {
  return value.toLowerCase();
}

export const upperFirst = function(value: string): string {
  const [first, ...last] = value.split("");
  const array = [first.toUpperCase(), ...last];
  return array.join("");
}

export const camelCase = function(value: string): string {
  const list = value.replace(/[\s-_]+/ig, "_").split("_");
  const data = list.map(function(text: string, index: number) {
    if (index > 0) {
      return upperFirst(toLower(text));
    } else {
      return toLower(text);
    }
  });
  return data.join("");
}

export const hasIn = function(data: object, key: string) {
  return data.hasOwnProperty(key);
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