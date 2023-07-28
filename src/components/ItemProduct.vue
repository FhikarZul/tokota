<template>
  <div class="border-2 border-borderColor p-4 rounded-2xl">
    <div class="bg-bgColor p-2 flex justify-center rounded-2xl">
      <img :src="productItem.image" class="h-48" />
    </div>

    <div class="mt-3">
      <p class="font-light text-borderColor text-base">
        {{ productItem.product }}
      </p>
      <p class="font-light text-2xl">{{ productItem.name }}</p>
    </div>

    <div class="mt-3">
      <p class="font-bold text-xl">Rp. {{ productItem.price }}</p>
      <div class="flex">
        <img src="../assets/image/star.svg" />
        <img src="../assets/image/star.svg" />
        <img src="../assets/image/star.svg" />
        <img src="../assets/image/star.svg" />
        <img src="../assets/image/star-hide.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["item"]);
const productItem = props.item;
</script>
