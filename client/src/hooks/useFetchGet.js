import { useState, useEffect } from 'react';

const useFetchGet = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [reload, setReload] = useState(true);

    const doReload = () => {
        setReload(true);
        console.log(0);
    }

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {credentials: "include"})
            .then(response => {
                if (!response.ok) {
                    throw Error('coud not fetch the data for thet resource');
                } else {
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setReload(false);
                setError(null);
            })
            .catch((error) => {
                if (error.name === 'AbortError') {
                    console.log('fetch aborted');
                } else{
                    setIsPending(false);
                    setReload(false);
                    setError(error.message);
                }
            })

        return () => abortCont.abort();
    }, [url, reload]);

    return {data, isPending, error, doReload };
}

export default useFetchGet;