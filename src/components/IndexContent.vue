<template>
  <div :class="[$style.indexContent]">
    <div :class="[$style.indexBackground]">
      <header-bar></header-bar>
      <carousel-section></carousel-section>
    </div>
    <about-us></about-us>
    <price-list></price-list>
    <contact-us></contact-us>
    <contact-section></contact-section>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
import CarouselSection from "./CarouselSection.vue";
import ContactSection from './ContactSection.vue';
import AboutUs from "./AboutUs.vue";
import PriceList from "./PriceList.vue";
import FooterBar from "./FooterBar.vue";
import ContactUs from "./ContactUs.vue";

export default {
  name: 'IndexContent',
  components: {
    "header-bar": HeaderBar,
    "carousel-section": CarouselSection,
    'contact-section': ContactSection,
    'about-us': AboutUs,
    'price-list': PriceList,
    'contact-us': ContactUs,
    "footer-bar": FooterBar,
  },
  props: {
    msg: String,
  },
};
</script>
<style module>
.indexContent {
  position: relative;
  height: 100%;
}

.indexBackground {
  background-image: url('../../public/assets/Rostov.svg');
  background-size: cover;
  margin-bottom: 58.5px;
}
</style>
