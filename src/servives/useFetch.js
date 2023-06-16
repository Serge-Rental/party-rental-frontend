import { useEffect, useState } from "react";
const baseUrl = "http://localhost:3005/" //import.meta.env.API_BASE_URL;
// custom hook for fetching data
export default function useFetch(api) {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(`${baseUrl}${api}`, {
            mode:"cors",
        });
        if (response.ok) {
            const json =  await response.json();
            setData(json);
        }else{
            throw response;
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsloading(false);
      }
    }
    init()
  }, [api]);
  return {data, error, isLoading}
}