import Header from "../Components/Header";
import Filter from "../Components/Filter";
import CountryInfoCards from "../Components/CountryInfoCards";
import search_icon from "/src/assets/images/search.png";

function Homepage() {

    return(
        <section>

            <Header />
            <div className="
                flex flex-col items-start gap-8 px-4 my-8 sm:flex-row 
                sm:justify-between lg:px-12 xl:px-18
            ">
                <div className="
                    font-nunito flex items-center gap-4 px-4 py-3
                    rounded shadow-search w-full sm:max-w-100
                ">
                    <img src={search_icon} alt="search icon" className="w-4 h-4 mx-2" />
                    <input 
                        type="search" 
                        id="search"
                        placeholder="Search for a country..."
                        className="font-semibold text-sm outline-none w-full"
                    />
                </div>
                <Filter />
            </div>
            
            <CountryInfoCards />
        </section>
    );
}

export default Homepage;