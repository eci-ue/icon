
import type { Props } from "./props";
import type { Component } from "vue";

type Callback = (props: Props) => Component | false;
const expand = new Set<Callback>();

let pic = function(value: string | number) {
  const name = String(value).trim().replace(/^(pic-{0,})?(\d+)(\.[a-z]+)?$/ig, "$2");
  const path = "https://static.eciol.com/image/country";
  if (/\.[a-z]+$/i.test(name)) {
    return `${path}/${name}`;
  }
  return `${path}/${name}.gif`;
};

export const countryPic = function(value: string | number) {
  return pic(value);
}

export const setCountryPic = function(value: (value: string | number) => string) {
  if (typeof value === "function") {
    pic = value;
  }
}

export const IconExpand = function(callback?: Callback): Callback[] {
  if (callback) {
    expand.add(callback);
  }
  return [...expand.values()];
}