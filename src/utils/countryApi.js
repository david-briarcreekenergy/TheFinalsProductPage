import axios from "axios";
const getCountries = async () => {
  try {
    const response = await axios.get(
      "https://api.first.org/data/v1/countries?offset=100",
    );
    return response.data.data;
  } catch (error) {
    const msg = `ERROR occurred inside the countryApi: ${error}`;
    console.error(msg);
    alert(msg);
  }
};

export default getCountries;
