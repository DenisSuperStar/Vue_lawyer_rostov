<template>
  <span :class="[$style.filledIcon, $style.isLess]" v-if="isLess">
    <font-awesome-icon :icon="kind" />
  </span>
  <span v-else :class="[$style.filledIcon]">
    <font-awesome-icon :icon="kind" />
  </span>
</template>

<script>
export default {
  name: "IconFilled",
  props: {
    isLess: {
      type: Boolean,
      default: false,
    },
    kind: {
      type: String,
      required: true,
    },
  },
};
</script>

<style module>
.filledIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background-color: #fff;
  color: #6630ff;
  font-size: 60px;
  padding: 6.5px 13px;
}

@media all and (max-width: 768px) {
  .filledIcon {
    border-top: 2px solid #6630ff;
    border-right: 2px solid #6630ff;
  }
}

@media all and (max-width: 1024px) {
  .isLess {
    width: 45px;
    height: 45px;
    font-size: 25px;
    border: none;
  }
}
</style>
