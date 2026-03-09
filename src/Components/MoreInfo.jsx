import { useEffect, useState } from "react";

function MoreInfo(props) {
    const { region, capital, population, name, subregion, tld, currencies, languages, borders } = props;
    // Object.values(currencies || {}).map(c => c.name).join(", ") currencies
    // Object.values(languages || {}).join(", ") languages

    const [ borderCountries, setBorderCountries ] = useState([]);

    useEffect(() => {
        if(!borders || borders.length === 0) return;

        const fetchBorders = async () => {
            const border_countries = await Promise.all(
                borders.map(async (border) => {
                    const res = await fetch(`https://restcountries.com/v3.1/alpha/${border}?fields=name`);
                    const data = await res.json();
                    return data.name.common;
                })
            );
            setBorderCountries(border_countries);
        };
        fetchBorders();
    }, [borders]);

    

    return(
        <section>

        </section>
    );
}

export default MoreInfo