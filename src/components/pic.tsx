import { ref, defineComponent } from "vue";

const style = {
  width: "var(--eci-icon-size)",
  maxHeight: "var(--eci-icon-size)"
};

const countryPic = function(value: string | number) {
  const name = String(value).trim().replace(/^(pic-{0,})?(\d+)(\.[a-z]+)?$/ig, "$2");
  const path = "https://static.eciol.com/image/country";
  if (/\.[a-z]+$/i.test(name)) {
    return `${path}/${name}`;
  }
  return `${path}/${name}.gif`;
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