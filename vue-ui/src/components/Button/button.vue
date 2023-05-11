<template>
  <button :class="['el-button', buttonClass]">
    <span class="iconfont" v-if="props.icon">{{ props.icon }}</span>
    <!-- 具名插槽 用来放置加载图标 -->
    <slot name="loading">
      <span class="iconfont IconAnimation" v-if="props.loading">{{
        props.loadingIcon || "&#xeb74;"
      }}</span>
    </slot>
    <!-- 默认插槽 用来放置按钮文本 -->
    <slot>
      <span></span>
    </slot>
  </button>
</template>

<script setup>
import { computed } from "vue";
import "./button-basic.scss";
import { hexToRgba } from "@/utils/index";
let props = defineProps({
  type: {
    //按钮类型
    type: String,
    default: "",
  },
  size: {
    //按钮大小
    type: String,
    default: "",
  },
  round: {
    //按钮是否为圆角
    type: Boolean,
    default: false,
  },
  icon: {
    //按钮字体图标
    type: String,
  },
  loadingIcon: {
    //按钮加载中的字体图标
    type: String,
  },
  loading: {
    //按钮是否加载中
    type: Boolean,
    default: false,
  },
  disabled: {
    //按钮是否禁用
    type: Boolean,
    default: false,
  },
  color: {
    //按钮颜色
    type: String,
    default: "",
  },
});
const buttonClass = computed(() => {
  return {
    [`el-button--${props.type}`]: props.type,
    [`el-button--${props.size}`]: props.size,
    [`el-button--custom`]: props.color,
    "is-round": props.round,
    "is-loading": props.loading,
    "is-disabled": props.disabled,
  };
});
/* 自定义颜色按钮 */
const cutomerColor = computed(() => {
  return props.color;
});
const customerHoverColor = computed(() => {
  return props.color ? hexToRgba(props.color, 0.5).rgba : "";
});
const customerLoadingColor = computed(() => {
  return props.color ? hexToRgba(props.color, 0.3).rgba : "";
});
</script>
<style lang="scss" scoped>
.el-button {
  &--custom {
    background-color: v-bind(cutomerColor);
    border-color: v-bind(cutomerColor);
    color: white;
    &:hover {
      color: #ffffff;
      border-color: v-bind(customerHoverColor);
      background-color: v-bind(customerHoverColor);
    }
    &:active {
      background-color: #ecf5ff;
      border-color: #409eff;
      color: #409eff;
    }
    &.is-loading,
    &.is-disabled {
      background-color: v-bind(customerLoadingColor);
      border-color: v-bind(customerLoadingColor);
      cursor: not-allowed;
    }
  }
}
</style>
