import { ref, onBeforeMount } from "vue";
import { defineStore } from "pinia";
import productDataSource from "../data/remote/product_remote_data_source";

// this is state management for home view
export const useHomeStore = defineStore("homeStore", () => {
  const topProduct = ref([]);
  const allProduct = ref([]);
  const isLoading = ref(true);
  const isLoadingNext = ref(false);
  const isInitial = ref(true);
  const page = ref(1);
  const isEndPage = ref(false);

  onBeforeMount(() => {
    getTopProduct();
    getAllProduct();
  });

  //lazy load
  window.onscroll = () => {
    let bottomOfWindow =
      document.documentElement.scrollTop + window.innerHeight ==
      document.documentElement.offsetHeight;

    if (bottomOfWindow) {
      if (isInitial.value == false && isEndPage.value == false) {
        page.value++;
        getAllProduct();
      }
      console.log("is bottom sccrolls " + page.value);
    }
  };

  //get data from data source
  async function getAllProduct() {
    if (isInitial.value) {
      const result = await productDataSource.getAllProduct(page.value);

      allProduct.value = result;
      isLoading.value = false;
      isInitial.value = false;
    } else {
      isLoadingNext.value = true;

      const result = await productDataSource.getAllProduct(page.value);

      if (result.length != 0) {
        allProduct.value.push(...result);
      } else {
        isEndPage.value = true;
        console.log("is end page ");
      }

      isLoadingNext.value = false;
    }
  }

  async function getTopProduct() {
    const result = await productDataSource.getTopProduct();

    topProduct.value = result;
    isLoading.value = false;
  }

  return {
    topProduct,
    allProduct,
    isLoading,
    isLoadingNext,
  };
});
