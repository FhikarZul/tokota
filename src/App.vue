<template>
  <div id="app">
    <div class="flex flex-col justify-between">
      <NavBar />
      <router-view />
      <spacher></spacher>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavbarView.vue";
import Footer from "./components/FooterView.vue";

export default {
  components: {
    NavBar, // register component
    Footer,
  },
};
</script>
