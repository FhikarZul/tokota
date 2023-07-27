<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
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
