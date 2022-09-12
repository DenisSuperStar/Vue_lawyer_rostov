<template>
  <header :class="[$style.header]">
    <nav :class="[$style.headerNavbar]">
      <div :class="[$style.navbarContainer]">
        <div :class="[$style.navbarIconLeft]">
          <span :class="[$style.navbarIcon]"></span>
        </div>
        <ul :class="[$style.navbarMenu]">
          <li
            :class="[$style.menuItem]"
            v-for="(link, index) in links"
            :key="index"
          >
            <a href="#" :class="[$style.primaryLink]" v-if="link.id === 1">{{
              link.text
            }}</a>
            <a href="#" :class="[$style.itemLink]" v-else>{{ link.text }}</a>
          </li>
        </ul>
        <div :class="[$style.navbarIconRight]">
          <div :class="[$style.navbarIconRight]">
            <span :class="[$style.navbarIcon]"></span>
          </div>
        </div>
      </div>
      <app-drawer />
    </nav>
  </header>
</template>

<script>
import AppDrawer from "./AppDrawer.vue";

export default {
  name: "HeaderBar",
  components: {
    "app-drawer": AppDrawer,
  },
  data: function () {
    return {
      links: [
        { id: 1, ref: "#home", text: "Главная" },
        { id: 2, ref: "#about", text: "О проекте" },
        { id: 3, ref: "#contacts", text: "Контакты" },
      ],
    };
  },
};
</script>

<style module>
.header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-bottom: 32.5px;
  z-index: 100;
}

.navbarContainer {
  display: flex;
}

.navbarIconLeft {
  width: 60px;
  height: 60px;
  background-color: #6630ff;
}

.itemLink {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;
}

@media all and (max-width: 1024px) {
  .navbarContainer {
    display: none;
  }
}

/*.headerMenu {
  display: flex;
  align-items: center;
}

.primaryMenu {
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 60px;
}

.primaryItem {
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;
  margin: 0 45.5px 0 0;
  color: #111;
}

.menuItem {
  display: block;
  text-decoration: none;
}

div > a:first-child {
  position: relative;
}

div > a:first-child::after {
  position: absolute;
  display: block;
  content: "";
  width: 100%;
  height: 2px;
  background-color: #6630ff;
  margin-top: 6.5px;
}

.widgetIcon {
  display: inline-block;
  width: 60px;
  height: 60px;
  background-color: #6630ff;
}

.iconContainer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.normalIcon {
  font-size: 26px;
  color: #fff;
}

.widgetText {
  display: flex;
  align-items: center;
  float: right;
  height: 60px;
  padding: 0 13px;
  font-size: 25px;
  line-height: 0.7;
  color: #111;
  text-transform: uppercase;
}

.widgetContent {
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  width: 168px;
  height: 60px;
  background-color: #111;
  color: #fff;
  font-size: 14px;
  line-height: 1.2;
}

@media all and (max-width: 768px) {
  .headerMenu {
    display: none;
  }
}*/
</style>
