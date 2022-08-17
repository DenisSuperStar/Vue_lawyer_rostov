<template>
  <h3 :class="[$style.sectionTitle]">{{name}}</h3>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style module>
.sectionTitle {
  line-height: 1.1;
  text-transform: uppercase;
  color: #fff;
  padding: 260px 13px 26px;
}

@media all and (max-width: 767px) {
  .sectionTitle {
    padding-top: 204px;
  }
}

@media all and (min-width: 768px) and (max-width: 1023px) {
  .sectionTitle {
    padding-top: 139px;
  }
}
</style>
