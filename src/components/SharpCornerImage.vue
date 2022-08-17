<template>
  <div :class="[$style.imageWrapper]">
    <div :class="[$style.borderlessWrapper]">
      <img :src="sharpPhoto" :class="[$style.photo]" alt="Основатель проекта" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SharpCornerImage",
  props: {
    sharpPhoto: {
      type: String,
      required: true,
    },
  },
};
</script>

<style module>
.imageWrapper {
  position: relative;
}

.imageWrapper::before,
.imageWrapper::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  z-index: 10;
}

.imageWrapper::before {
  top: -13px;
  left: -13px;
}

.imageWrapper::after {
  right: -13px;
  bottom: -13px;
}

.borderlessWrapper {
  width: 100%;
  position: relative;
  background-color: #fff;
  border: 2px solid #fff;
  z-index: 100;
}

.photo {
  display: block;
  width: 100%;
}
</style>
