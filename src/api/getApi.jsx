import axiosInstance from ".";

const API_KEY = "e5f1e0e91073e047bfd37039ad433153";

const getAPI = {
  getData({ latitude, longitude }) {
    // console.log(latitude, longitude);
    return axiosInstance.get(
      `onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    );
  },
  getDataCity(action) {
    return axiosInstance.get(
      `weather?q=${action}&units=metric&appid=${API_KEY}`
    );
  },
};

export default getAPI;
