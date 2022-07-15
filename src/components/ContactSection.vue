<template>
  <section :class="[$style.routeSection]">
    <div :class="[$style.location]">
      <div class="section-icon"></div>
      <div :class="[$style.contacts]">
        <div :class="[$style.contactTitle]">__контакты</div>
        <div :class="[$style.contactSubtitle]">Мы здесь ради вас</div>
        <div :class="[$style.contactSubtitle]">
          c 10.00 до 20.00, 7 дней в неделю
        </div>
      </div>
    </div>
    <div :class="[$style.yandexMapSection]">
      <yandex-map></yandex-map>
    </div>
  </section>
</template>

<script>
import YandexMap from "./YandexMap.vue";

export default {
  name: "ContactSection",
  components: {
    'yandex-map': YandexMap
  }
};
</script>

<style module>
.routeSection {
  display: flex;
  width: 100%;
  grid-gap: 50px;
  margin-top: 120px;
}

.location {
  width: 40%;
}

.contacts {
  text-align: right;
}

.contactTitle {
  font-size: 18px;
  color: #6630ff;
  margin-bottom: 5px;
  line-height: 17px;
}

.contactSubtitle {
  font-size: 28px;
  line-height: 34px;
  color: #000;
  margin-bottom: 20px;
}

.yandexMapWrapper {
  width: 60%;
}
</style>
