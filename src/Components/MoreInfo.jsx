import { useEffect, useState } from "react";

function MoreInfo({ moreCountryInfo }) {
    // Object.values(currencies || {}).map(c => c.name).join(", ") currencies
    // Object.values(languages || {}).join(", ") languages
    const [ flags, region, capital, population, name, subregion, tld, currencies, languages, borders ] = moreCountryInfo;
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
            console.log(border_countries)
        };
        fetchBorders();
    }, [borders]);

    

    return(
        <section className="absolute w-screen h-screen z-2 bg-bg text-text px-6 py-8">
            <button className="text-sm flex gap-2 bg-card px-5 py-1 cursor-pointer"
                style={{boxShadow: 'var(--shadow-search)'}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"
                    style={{ stroke: "var(--color-text)" }}
                     className="w-5 pb-1/2"
                >
                    <path d="M20 12H4M4 12L10 6M4 12L10 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Back</span>
            </button>
        </section>
    );
}

export default MoreInfo