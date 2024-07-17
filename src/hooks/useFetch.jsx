import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching users data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                })
                .catch(err => {
                    console.log(err)
                });
        }, 1000);
    }, [url]);

    return { data };

}

export default useFetch