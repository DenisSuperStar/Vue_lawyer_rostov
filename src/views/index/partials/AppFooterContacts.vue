<template>
  <div :class="[$style.contacts]">
    <span :class="[$style.contactTitle]">Связаться</span>

    <div :class="[$style.contactItem]">
      <font-awesome-icon icon="fa-solid fa-phone" />
      <span :class="[$style.labelItem]">+7 (951) 839-59-39</span>
    </div>
    <div :class="[$style.contactItem]">
      <font-awesome-icon icon="fa-solid fa-clock" />
      <span :class="[$style.labelItem]"
        >Ростов-на-Дону, ул.Максима Горького, 151</span
      >
    </div>
    <div :class="[$style.contactItem]">
      <font-awesome-icon icon="fa-solid fa-house-chimney" />
      <span :class="[$style.labelItem]">Пн-Вс: 10.00 - 20.00</span>
    </div>
    <div :class="[$style.contactItem]">
      <font-awesome-icon icon="fa-solid fa-envelope" />
      <span :class="[$style.labelItem]">sergeynazarov161@yandex.ru</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooterContacts",
};
</script>

<style module>
.contacts {
  padding-top: 19.5px;
}

.contactTitle {
  display: block;
  font-size: 16px;
  line-height: 1.1;
  color: #fff;
  padding-bottom: 13px;
}

.contactItem {
  padding-bottom: 6.5px;
  color: #fff;
}

.contactItem:last-child {
  padding-bottom: 0;
}

.labelItem {
  padding-left: 6.5px;
}

@media all and (max-width: 768px) {
  .contactTitle {
    padding-top: 13px;
  }
}
</style>
