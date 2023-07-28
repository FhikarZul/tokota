<template>
  <p>Data{{ productId }}</p>
</template>

<script setup>
const props = defineProps(["id"]);
const productId = props.id;
</script>
