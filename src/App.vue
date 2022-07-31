<template>
  <div id="app">
    <IndexView />
  </div>
</template>

<script>
import IndexView from "./views/IndexView.vue";

export default {
  name: "App",
  components: {
    IndexView,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}
html {
  color: #000;
  background-color: #fff;
}
</style>
