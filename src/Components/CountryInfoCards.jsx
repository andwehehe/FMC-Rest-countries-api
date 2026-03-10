import { useCountriesData } from "/src/hooks/useCountriesData.js";

function CountryInfoCards({ filter, search, setMoreCountryInfo }) {

    const { countriesData, loading } = useCountriesData();

    return(
        <section className="
            font-nunito text-text m-4 py-4 grid place-items-center gap-12
            sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-max mx-auto xl:gap-16
        ">
            {
                countriesData.filter(item => {
                    if(search) {
                        return (filter === "all" ?  item.region !== "all" :  item.region === filter) && 
                        item.name.common.toLowerCase().includes(search.toLowerCase());
                    } else {
                        return filter === "all" ?  item.region !== "all" :  item.region === filter;
                    }
                }
                ).map(({ flags, region, capital, population, name, subregion, tld, currencies, languages, borders }, index) => {
                    // Object.values(currencies || {}).map(c => c.name).join(", ") currencies
                    // Object.values(languages || {}).join(", ") languages
                    return(
                         !loading && 
                        <article 
                            key={index}
                            className="w-8/10 bg-card rounded-md overflow-hidden w-69 h-full"
                            style={{boxShadow: 'var(--shadow-search)'}}
                            onClick={() => setMoreCountryInfo([ flags, region, capital, population, name, subregion, tld, currencies, languages, borders ])}
                        >
                            <img src={flags.png} alt={flags.alt} className="w-full h-40" />
                            <div className="p-6 mb-6 leading-relaxed">
                                <h3 className="font-nunito font-bold text-xl mb-4">{name.common}</h3>
                                <p>
                                    <span className="font-nunito font-semibold">Population: </span> 
                                    {population.toLocaleString()}
                                </p>
                                <p>
                                    <span className="font-nunito font-semibold">Region: </span> 
                                    {region}
                                </p>
                                <p>
                                    <span className="font-nunito font-semibold">Capital: </span> 
                                    {capital[0]}
                                </p>
                            </div>
                        </article>
                    );
                })
                
            }

        </section>
    );
}

export default CountryInfoCards