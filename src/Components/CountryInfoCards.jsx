import { useCountriesData } from "/src/hooks/useCountriesData.js";

function CountryInfoCards() {

    const { countriesData, loading } = useCountriesData();
    // if(!loading) {
    //     console.log(countriesData[67].capital[0])
    //     console.log(countriesData[67])
    // }

    return(
        <section className="
            font-nunito text-light-text m-4 py-4 grid place-items-center gap-12
            sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-max mx-auto xl:gap-16
        ">
            {/* flex flex-col items-center justify-center gap-12 */}
            {
                countriesData.map(({ flags, region, capital, population, name }, index) => {
                    // if(index > 7) return;

                    return(
                         !loading && 
                        <article 
                            key={index}
                            className="w-8/10 bg-white rounded-md overflow-hidden shadow-search w-69 h-full"
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

            {
                // !loading && 
                // <article 
                //     key={countriesData[73].capital[0]}
                //     className="w-8/10 bg-white rounded-md overflow-hidden shadow-search max-w-69"
                // >
                //     <img src={countriesData[73].flags.png} alt={countriesData[73].flags.alt} />
                //     <div className="p-6 mb-6 leading-relaxed">
                //         <h3 className="font-nunito font-bold text-xl mb-4">{countriesData[73].name.common}</h3>
                //         <p>
                //             <span className="font-nunito font-semibold">Population: </span> {countriesData[73].population.toLocaleString()}
                //         </p>
                //         <p>
                //             <span className="font-nunito font-semibold">Region: </span> 
                //             {countriesData[73].region}
                //         </p>
                //         <p>
                //             <span className="font-nunito font-semibold">Capital: </span> 
                //             {countriesData[73].capital[0]}
                //         </p>
                //     </div>
                // </article>
            }

        </section>
    );
}

export default CountryInfoCards