import { useEffect, useState } from "react";

function MoreInfo({ moreCountryInfo, setMoreCountryInfo }) {
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
            // console.log(border_countries)
        };
        fetchBorders();
    }, [borders]);

    return(
        moreCountryInfo.length !== 0 && 
        <section className="font-nunito absolute w-screen h-max z-2 bg-bg text-text px-6 py-8">
            <article>
                <button className="text-sm flex gap-2 bg-card px-5 py-1 cursor-pointer"
                    style={{boxShadow: 'var(--shadow-search)'}}
                    onClick={() => setMoreCountryInfo([])}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"
                        style={{ stroke: "var(--color-text)" }}
                        className="w-5 pb-1/2"
                    >
                        <path d="M20 12H4M4 12L10 6M4 12L10 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="flex items-center">Back</span>
                </button>

                <img src={flags.png} alt={flags.alt} className="h-50 my-12 w-80" />
            </article>

            <article>
               <div className="flex flex-col gap-12">
                    {/* level 1 info */}
                    <div>
                        <p className="mb-6 font-bold text-2xl">{name.common}</p>
                        <ul className="text-input flex flex-col gap-2">
                            <li>
                                <span className="font-semibold text-text">Native Name: </span> 
                                {Object.values(name.nativeName || {})[0]?.common}
                            </li>
                            <li>
                                <span className="font-semibold text-text">Population: </span> 
                                {population.toLocaleString()}
                            </li>
                            <li>
                                <span className="font-semibold text-text">Region: </span> 
                                {region}
                            </li>
                            <li>
                                <span className="font-semibold text-text">Sub Region: </span> 
                                {subregion}
                            </li>
                            <li>
                                <span className="font-semibold text-text">Capital: </span> 
                                {capital}
                            </li>
                        </ul>
                    </div>

                    {/* level 2 info */}
                    <div>
                        <ul className="text-input flex flex-col gap-2">
                            <li>
                                <span className="font-semibold text-text">Top Level Domain: </span>
                                {tld?.join(", ")}
                            </li>
                            <li>
                                <span className="font-semibold text-text">Currencies: </span>
                                {Object.values(currencies || {})
                                    .map(currency => currency.name)
                                    .join(", ")}
                            </li>
                            <li>
                                <span className="font-semibold text-text">Languages: </span>
                                {Object.values(languages || {}).join(", ")}
                            </li>
                        </ul>
                    </div>
               </div>

                {/* border countries */}
               <article>
                    <p className="mb-6 mt-12 font-bold text-lg">Border Countries:</p>
                    <div className="flex flex-wrap gap-2">
                        {
                            borderCountries.map((borderCountry) => {
                                return(
                                    <div className="text-sm bg-card w-max px-5 py-1" 
                                        key={borderCountry}
                                        style={{boxShadow: 'var(--shadow-search)'}}
                                    >
                                        {borderCountry}
                                    </div>
                                );
                            })
                        }
                    </div>
               </article>
            </article>
        </section>
    );
}

export default MoreInfo