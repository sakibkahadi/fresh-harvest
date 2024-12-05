import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProduct = (searchTerm = "") => {
  const axiosPublic = useAxiosPublic();

  const {
    data: products = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["products", searchTerm],
    queryFn: async () => {
      const res = await axiosPublic.get("products", {
        params: { searchTerm: searchTerm || undefined },
      });
      return res.data.data;
    },
    // Only refetch when searchTerm changes
    enabled: true,
  });

  return [products, loading, refetch];
};

export default useProduct;
