/**
 * @file 国旗图标
 * @author svon.me@gmail.com
 */

import { countryPic } from "./expand";
import { ref, defineComponent } from "vue";

const style = {
  width: "var(--eci-icon-size)",
  maxHeight: "var(--eci-icon-size)"
};

export default defineComponent({
  name: "IconPic",
  props: {
    name: {
      default: "0",
      required: false,
      type: [String, Number]
    }
  },
  setup(props) {
    const src = ref<string>(countryPic(props.name));
    const onError = () => {
      src.value = countryPic(0);
    }
    return () => {
      return (<span>
        <img style={ style } src={ src.value } onError={ onError }/>
      </span>)
    }
  }
});