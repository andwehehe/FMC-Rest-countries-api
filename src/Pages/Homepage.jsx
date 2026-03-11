import Header from "../Components/Header";
import Filter from "../Components/Filter";
import MoreInfo from "../Components/MoreInfo";
import CountryInfoCards from "../Components/CountryInfoCards";
import search_icon from "/src/assets/images/search.png";
import { useEffect, useState } from "react";

function Homepage() {

    const [ filter, setFilter ] = useState("all");
    const [ search, setSearch ] = useState("");

    const searchCountry = (e) => {
        setSearch(e.target.value);
    };

    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "dark"
    );

    const toggleTheme = () => {
        const savedTheme = theme === "dark" ? "light" : "dark";
        setTheme(savedTheme);
        localStorage.setItem("theme", savedTheme);
        document.body.classList.toggle('dark_body');
        document.documentElement.classList.toggle('dark');
    };

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark_body');
        }
    }, [theme])

    const [ moreCountryInfo, setMoreCountryInfo ] = useState([]); 

    return(
        <section className="bg-bg">

            <Header toggleTheme={toggleTheme} theme={theme} />
            <MoreInfo 
                moreCountryInfo={moreCountryInfo}
                setMoreCountryInfo={setMoreCountryInfo}
            />
            <div className="
                flex flex-col items-start gap-8 px-4 my-8 sm:flex-row 
                sm:justify-between lg:px-12 xl:px-18
            ">
                <div className="
                    font-nunito flex items-center gap-4 px-4 py-3
                    rounded bg-card w-full sm:max-w-100 sm:py-4
                " style={{boxShadow: 'var(--shadow-search)'}}>
                    <img src={search_icon} alt="search icon" className="w-4 h-4 mx-2" />
                    <input 
                        type="search" 
                        id="search"
                        placeholder="Search for a country..."
                        className="font-semibold text-sm outline-none w-full placeholder:text-text text-text"
                        onChange={searchCountry}
                    />
                </div>
                <Filter setFilter={setFilter} theme={theme} />
            </div>
            
            <CountryInfoCards filter={filter} search={search} setMoreCountryInfo={setMoreCountryInfo} />
        </section>
    );
}

export default Homepage;