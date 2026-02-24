import { useState, useEffect } from "react";
import { getCountriesData } from '/src/api/allCountriesData.js';

export function useCountriesData() {
    const [ countriesData, setCountriesData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        getCountriesData().then(data => {
            setCountriesData(data);
            setLoading(false);
        })
    }, [])

    return { countriesData, loading };
}