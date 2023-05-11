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
});
const buttonClass = computed(() => {
  return {
    [`el-button--${props.type}`]: props.type,
    [`el-button--${props.size}`]: props.size,
    "is-round": props.round,
    "is-loading": props.loading,
    "is-disabled": props.disabled,
  };
});
</script>

<style lang="scss" scoped></style>
