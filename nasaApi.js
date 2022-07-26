import axios from "axios";

export const nasaMsg = async () => {
    const getResponse = await axios
      .get("https://api.nasa.gov/planetary/apod?api_key=aRmGij9Qh1oahMdOAYjkeqrAGaiyVoryOztfE1ez")
      .then(res => res)
      .catch(err => console.log(err));
    return getResponse;
  };