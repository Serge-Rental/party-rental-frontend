import  {useState, useEffect} from 'react'
const baseUrl = "http://localhost:3005/"

export default function useFetchAll(urls, cart){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const promises = urls.map((url)=>
            fetch(`${baseUrl}${url}`).then((response) => {
                if (response.ok) return response.json();
                throw response;
            })
        );
        Promise.all(promises)
            .then((json) => setData(json))
            .catch((e) => {
                console.error(e);
                setError(e);
            })
            .finally(() => setLoading(false));
        

    }, [cart]);
    console.log("data isloading", {loading})
    console.log("data error", {error})
    console.log("data", {data})
    return {data, loading, error}
}