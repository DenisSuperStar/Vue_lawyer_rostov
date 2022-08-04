<template>
  <span :class="[$style.filledIcon]">
    <font-awesome-icon :icon="kind" />
  </span>
</template>

<script>
export default {
  name: "IconFilled",
  props: {
    kind: {
      type: String,
      required: true
    }
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
}

@media all and (max-width: 768px) {
  .filledIcon {
    border-top: 2px solid #6630ff;
    border-right: 2px solid #6630ff;
  }
}
</style>
