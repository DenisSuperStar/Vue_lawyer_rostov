<template>
  <div class="drawer">
    <div class="drawer-navigation">
      <div class="navigation-header">
        <icon-filled :isLess="true" kind="fa-solid fa-scale-balanced" />
        <div class="nav-label">Юрист-на-Дону</div>
      </div>
      <div class="nav-body">
        <a href="#" class="nav-item">Главная</a>
        <a href="#" class="nav-item">О проекте</a>
        <a href="#" class="nav-item">Контакты</a>
      </div>
      <div class="navigation-footer">
        <icon-filled :isLess="true" kind="fa-solid fa-phone" />
        <div class="nav-text">1-800-643-4300</div>
      </div>
    </div>
    <div class="drawer-close">
      <icon-filled :isLess="true" kind="fa-solid fa-chevron-left" />
    </div>
  </div>
</template>

<script>
import IconFilled from "./IconFilled.vue";

export default {
  name: "AppDrawer",
  components: {
    "icon-filled": IconFilled,
  },
};
</script>

<style scoped>
.drawer {
  position: relative;
}

.navigation-header {
  display: flex;
  grid-gap: 6.5px;
  min-width: 260px;
  padding: 0 2em 1em;
}

.nav-label {
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.1;
}

.drawer-navigation {
  width: 260px;
  height: 937px;
  background: #6843cf;
  overflow: hidden;
  transition: 0.5s;
}

.nav-body {
  min-width: 260px;
}

.nav-item {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 0 2em 1em;
  text-transform: uppercase;
  text-align: center;
}

.navigation-footer {
  display: flex;
  align-items: center;
  color: #fff;
  padding: 2em 2em 1em;
}

.nav-text {
  padding: 13px;
  background: #111;
}

.drawer-close {
  position: absolute;
  right: 80px;
  top: calc(50% - 20px);
  width: 45px;
  height: 45px;
  background-color: #6843cf;
  cursor: pointer;
}

@media all and (min-width: 1025px) {
  .drawer {
    display: none;
  }
}
</style>
