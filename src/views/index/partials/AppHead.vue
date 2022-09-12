<template>
  <section :class="[$style.head]">
    <app-header />
    <div :class="[$style.headCarousel]">
      <app-carousel :isDots="hasDots" />
    </div>
  </section>
</template>

<script>
import AppHeader from '@/components/index/AppHeader.vue';
import AppCarousel from '@/components/index/AppCarousel.vue';

export default {
  name: "AppHead",
  components: {
    "app-header": AppHeader,
    "app-carousel": AppCarousel,
  },
  data: function () {
    return {
      hasDots: true,
    };
  },
};
</script>

<style module>
.head {
  background-image: url("../../../../public/assets/Rostov.svg");
  background-size: cover;
}

.headCarousel {
  height: 100%;
}
</style>
