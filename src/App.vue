<template>
  <div id="app">
    <IndexContent></IndexContent>
  </div>
</template>

<script>
import IndexContent from "./components/IndexContent";

export default {
  name: "App",
  components: {
    IndexContent,
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
  box-sizing: border-box;}html {
  color: #000;
  background-color: #fff;
}
</style>
