import {useState, useEffect} from "react";

const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await fetch(url);
          if (!res.ok) {
            throw Error("error while fetching data...");
          }
          const dataFetched = await res.json();
          setdata(dataFetched);
        } catch (err) {
          setError(err.message);
        }
        setIsPending(false);
      };
  
      getData();
    }, [url]);

    return {
        data, isPending, error
    }
}

export default useFetch;

