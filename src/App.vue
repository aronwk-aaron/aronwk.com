<template>
  <div id="app" class="text-white">
    <b-navbar toggleable="md" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand :href="'/'">Aaron K.</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item :href="'/projects'">Projects</b-nav-item>
          <b-nav-item :href="'/resume'">Resume</b-nav-item>
          <b-nav-item :href="'/social'">Social</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item :href="'/contact'">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
}
</style>
