<template>
  <div id="app" class="text-white">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  metaInfo: {
    title: "Null",
    titleTemplate: "%s | Aaron Kimbrell"
  }
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
