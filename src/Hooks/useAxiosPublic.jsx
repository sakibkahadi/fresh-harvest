import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://api-fresh-harvest.code-commando.com/api/v1",
});

const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
