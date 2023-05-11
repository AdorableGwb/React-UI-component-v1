<template>
  <div>
    <Button>按钮</Button>
    <Button type="success" round icon="&#x10118;">按钮</Button>
    <Button type="success" round icon="&#x10118;" disabled>按钮</Button>
    <Button type="warning" size="large">按钮</Button>
    <Button type="danger" size="small" round>按钮</Button>
    <Button type="success" loading-icon="&#xe699;" loading>按钮</Button>
    <Button type="danger" loading>按钮</Button>
    <Button type="success" loading round>
      <template #loading>
        <div class="custom-loading">
          <span class="iconfont IconAnimation">{{ "&#xe816;" }}</span>
        </div>
      </template>
      按钮</Button
    >
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.custom-loading {
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 15px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-right: 5px;
    &.IconAnimation {
      /* 必须添加 因为animation对行内元素不生效 需要转换成块级元素 */
      display: inline-block;
      animation: iconRotate 1.5s linear infinite;
    }
  }
  @keyframes iconRotate {
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
