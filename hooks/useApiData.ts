import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useApiData = () => {
  return useQuery({
    queryKey: ["cloudMetrics"],
    queryFn: async () => {
      const response = await axios.get(
        "https://dummyjson.com/products"
      );
      return response.data.products.slice(0, 4);
    },
  });
};