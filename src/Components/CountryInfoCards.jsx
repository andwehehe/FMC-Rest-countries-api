import { useCountriesData } from "/src/hooks/useCountriesData.js";

function CountryInfoCards() {

    const { countriesData, loading } = useCountriesData();
    if(!loading) {
        console.log(countriesData[67].capital[0])
        console.log(countriesData[67])
    }

    return(
        <section className="font-nunito text-light-text flex items-center justify-center m-4 py-4">
            
            {/* {
                countriesData.map(({ capital, flag }) => {
                    return(
                        <article key={capital}>
                            <img src={flag.png} alt={flag.alt} />
                        </article>
                    );
                })
            } */}

            {
                !loading && 
                <article 
                    key={countriesData[67].capital[0]}
                    className="w-8/10 bg-white rounded-md overflow-hidden shadow-search"
                >
                    <img src={countriesData[67].flags.png} alt={countriesData[67].flags.alt} />
                    <div className="p-6 mb-6 leading-relaxed">
                        <h3 className="font-nunito font-bold text-xl mb-4">{countriesData[67].name.common}</h3>
                        <p>
                            <span className="font-nunito font-semibold">Population: </span> {countriesData[67].population.toLocaleString()}
                        </p>
                        <p>
                            <span className="font-nunito font-semibold">Region: </span> 
                            {countriesData[67].region}
                        </p>
                        <p>
                            <span className="font-nunito font-semibold">Capital: </span> 
                            {countriesData[67].capital[0]}
                        </p>
                    </div>
                </article>
            }

        </section>
    );
}

export default CountryInfoCards