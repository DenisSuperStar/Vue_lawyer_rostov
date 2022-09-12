<template>
  <h3 :class="[$style.primaryTitle]">{{name}}</h3>
</template>

<script>
export default {
  name: "PrimaryTitle",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style module>
.primaryTitle {
  line-height: 1.1;
  text-transform: uppercase;
  color: #fff;
  padding: 260px 13px 26px;
}

@media all and (max-width: 1023px) {
  .primaryTitle {
    padding-top: 159.5px;
  }
}
</style>
