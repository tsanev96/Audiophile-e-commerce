import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Axios } from "../networking/http";

export const useFetch = <T>(url: string) => {
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
      setisLoading(true);
      try {
        const data = await Axios.get(url);
        setResponse(data);
        setisLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchedData();
  }, [url]);

  return { response, isLoading, error };
};
