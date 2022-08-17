<template>
  <div :class="[$style.catalogOverview]">
    <div :class="[$style.catalogTitle]">{{ title }}</div>
    <app-overview-carousel />
  </div>
</template>

<script>


import AppOverviewCarousel from "@/components/AppOverviewCarousel.vue";

export default {
  name: "AppFooterOverviewCatalog",
  components: {
    "app-overview-carousel": AppOverviewCarousel,
  },
  data: function () {
    return {
      title: "Услуги",
    };
  },
};
</script>

<style module>
.catalogOverview {
  max-width: 920px;
  margin: 0 auto;
}

.catalogTitle {
  display: block;
  font-size: 16px;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 13px;
  padding-left: 13px;
  padding-right: 13px;
}
</style>
