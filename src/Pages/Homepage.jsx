import Header from "../Components/Header";
import search_icon from "/src/assets/images/search.png";

function Homepage() {

    return(
        <section>
            <Header />

            <div className="font-nunito flex items-center gap-4 px-4 py-3 mx-4 my-6 rounded shadow-search">
                <img src={search_icon} alt="search icon" className="w-4 h-4 mx-2" />
                <input 
                    type="search" 
                    id="search"
                    placeholder="Search for a country..."
                    className="text-sm"
                />
            </div>
        </section>
    );
}

export default Homepage;