import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useHomeStore = defineStore("homeStore", () => {
  const product = ref([]);

  async function getProduct() {
    const baseURI = "https://jsonplaceholder.typicode.com/users";

    axios
      .get(baseURI)
      .then((response) => {
        product.value = JSON.parse(JSON.stringify(response.data));
        console.log(response.data);
        console.log(product.value[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { product, getProduct };
});
