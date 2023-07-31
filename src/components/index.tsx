/**
 * @file 超级 Icon
 * @author svon.me@gmail.com
 * @description 组合 IconFont & Ant Design Icon 图标
 */

import Pic from "./pic";
import * as _ from "./util";
import { IconExpand } from "./expand";
import * as icons from "@ant-design/icons-vue";
import { DefineComponent, defineComponent, h as createElement, PropType } from "vue";

import { StepBackwardFilled } from "@ant-design/icons-vue";

{/* <step-backward-outlined /> */}

import type { Props } from "./props";
import type { Component, CSSProperties, VNode } from "vue";

const expand = function(props: Props) {
  let value: Component | boolean = false;
  for (const callback of IconExpand()) {
    value = callback(props);
    if (value) {
      break;
    }
  }
  return value;
};

const create = function(name: string) {
  const iconFontStyle: CSSProperties = {
    "font-style": "normal",
    "line-height": 0,
    "text-transform": "none",
    "vertical-align": "-0.125em",
    "text-rendering": "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "fill": "currentColor",
    "overflow": "hidden",
  };
  const svgStyle: CSSProperties = { width: "1em", height: "1em" };
  return (<span class="icon-font">
    <i style={ iconFontStyle }>
      <svg aria-hidden="true" style={ svgStyle }>
        <use xlinkHref={`#${name}`}/>
      </svg>
    </i>
  </span>);
};

export default defineComponent({
  name: "Icon",
  props: {
    type: {
      required: true,
      type: String as PropType<string | DefineComponent>
    },
    size: {
      type: [String, Number] as PropType<string | number>,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
  },
  setup(props: Props) {
    let isExpand: boolean = false;
    const icon = function(name: string | DefineComponent) {
      if (typeof name === "string") {
        const expandValue = expand(props);
        if (expandValue) {
          isExpand = true;
          return expandValue;
        }
        if (_.isPic(name as string)) {
          isExpand = true;
          return (<Pic name={ name }></Pic>);
        }
        const key = _.upperFirst(_.camelCase(name));
        // @ts-ignore
        const value = icons[key];
        if (value) {
          return value as DefineComponent;
        }
        return create(name);
      }
      return name as DefineComponent;
    };

    return () => {
      const content = icon(props.type);
      const className = [props["class"]];
      if (props["class"] && props["class"].includes("flex")) {
        className.push("eci-icon");
      } else {
        className.push("eci-icon", "inline-flex");
      }
      const style = {};
      if (props.color) {
        Object.assign(style, { color: props.color });
      }
      if (props.size) {
        const value = _.isNumber(props.size) ? `${props.size}px` : props.size;
        if (isExpand) {
          className.push("items-center");
          Object.assign(style, { 
            "--icon-size": value,
            "--eci-icon-size": value,
            "height": "var(--icon-size)"
          });
        } else {
          Object.assign(style, { "fontSize": value });
        }
      }
      return createElement(content as VNode, { style, "class": className });
    }
  }
});