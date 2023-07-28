import axios from "axios";

export default class ProductDataSource {
  static async getAllProduct(page) {
    const baseURI =
      "https://ta.ewalabs.com/tokota/api/all-product.php?start=" +
      page +
      "&limit=4";

    const result = await axios
      .get(baseURI)
      .then((response) => {
        return JSON.parse(JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err);

        return [];
      });

    return result;
  }

  static async getTopProduct() {
    const baseURI = "https://ta.ewalabs.com/tokota/api/top-product.php";

    const result = await axios
      .get(baseURI)
      .then((response) => {
        return JSON.parse(JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err);

        return [];
      });

    return result;
  }
}
