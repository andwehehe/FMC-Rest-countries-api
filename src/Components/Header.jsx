import moon_icon from '/src/assets/images/moon.png';

function Header({ selectedTheme, theme }) {

    return(
        <header className='
            flex justify-between items center px-4 py-8 shadow-md
            md:py-6 lg:px-12 xl:px-18
        ' style={{backgroundColor: theme === "light" ? "hsl(0, 0%, 99%)" : "hsl(207, 26%, 17%)"}}>
            <h1 className='font-nunito font-extrabold md:text-xl'>
                Where in the world?
            </h1>
            <div className='flex items-center gap-2' onClick={selectedTheme}>
                <img src={moon_icon} alt="moon" className='w-4' />
                <p className='font-nunito font-semibold'>Dark Mode</p>
            </div>
        </header>
    );
}

export default Header