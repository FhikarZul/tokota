<template>
  <!-- header banner -->
  <div class="bg-primary2 h-1/2 w-full">
    <div class="container grid grid-cols-1 md:grid-cols-2 items-center mx-auto">
      <div class="flex justify-center md:order-2">
        <img src="../../assets/image/hero.png" alt="Hero" class="h-96" />
      </div>

      <div class="m-4 md:m-0">
        <p class="font-light text-xl">Diskon 30% hari ini</p>
        <p class="font-black text-3xl md:text-6xl text-primary1">
          Promo 2023<br />Jacket Collection
        </p>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 mt-5 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  </div>
  <!-- end header banner -->

  <!-- category banner -->
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 mt-6 gap-5">
    <div
      class="bg-primary2 p-5 rounded-md flex justify-between relative mx-5 md:mx-0"
    >
      <div>
        <p class="font-light text-white text-xl">Diskon 10%</p>
        <p class="font-black text-white text-xl">Baju</p>
        <button
          type="button"
          class="text-primary2 bg-white border border-gray-300 mt-5 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2"
        >
          Beli Sekarang
        </button>
      </div>

      <div>
        <img
          src="../../assets/image/category1.png"
          alt="Baju"
          class="h-50 w-30 absolute bottom-0 right-0"
        />
      </div>
    </div>

    <div
      class="bg-primary3 p-5 rounded-md flex justify-between relative mx-5 md:mx-0"
    >
      <div>
        <p class="font-light text-black text-xl">Diskon 10%</p>
        <p class="font-black text-black text-xl">Sepatu</p>
        <button
          type="button"
          class="text-primary3 bg-black border border-gray-300 mt-5 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2"
        >
          Beli Sekarang
        </button>
      </div>

      <div>
        <img
          src="../../assets/image/category2.png"
          alt="Baju"
          class="h-50 w-30 absolute bottom-0 right-0"
        />
      </div>
    </div>

    <div
      class="bg-primary1 p-5 rounded-md flex justify-between relative mx-5 md:mx-0"
    >
      <div>
        <p class="font-light text-white text-xl">Diskon 10%</p>
        <p class="font-black text-white text-xl">Celana</p>
        <button
          type="button"
          class="text-primary1 bg-white border border-gray-300 mt-5 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2"
        >
          Beli Sekarang
        </button>
      </div>

      <div>
        <img
          src="../../assets/image/category3.png"
          alt="Baju"
          class="h-50 w-30 absolute bottom-0 right-0"
        />
      </div>
    </div>
  </div>
  <!-- end category banner -->

  <!-- top product -->
  <div class="container mx-auto mt-8">
    <h1 class="font-bold text-2xl mx-5 md:mx-0">Produk Populer</h1>

    <div v-if="homeStore.isLoading">
      <LoaderView />
    </div>

    <div v-else>
      <div
        class="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 md:mx-0"
      >
        <div v-for="product in homeStore.topProduct">
          <router-link :to="'/detail-product/' + product.id">
            <ItemProduct v-bind:item="product" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- end top product -->

  <!-- all product -->
  <div class="container mx-auto mt-8">
    <h1 class="font-bold text-2xl mx-5 md:mx-0">Semua Produk</h1>

    <div v-if="homeStore.isLoading">
      <LoaderView />
    </div>

    <div v-else>
      <div v-bind:ref="homeStore.scrollComponent">
        <div
          class="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 md:mx-0"
        >
          <div v-for="product in homeStore.allProduct">
            <router-link :to="'/detail-product/' + product.id">
              <ItemProduct v-bind:item="product" />
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div v-if="homeStore.isLoadingNext" class="mt-4">
      <LoaderView />
    </div>
  </div>
  <!-- end all product -->
</template>

<script setup>
import { useHomeStore } from "@/stores/home_store";
import LoaderView from "@/components/LoadingView.vue";
import ItemProduct from "@/components/ItemProduct.vue";

const homeStore = useHomeStore();
</script>
