import moon_icon from '/src/assets/images/moon.png';
import sun_icon from '/src/assets/images/sun-icon.svg';

function Header({ toggleTheme, isDark }) {

    return(
        <header className='
            text-text flex justify-between items-center px-4 py-8 bg-card
            md:py-6 lg:px-12 xl:px-18
        ' style={{boxShadow: 'var(--shadow-search)'}}>
            <h1 className='font-nunito font-extrabold md:text-xl'>
                Where in the world?
            </h1>
            <div className='flex items-center gap-2' onClick={toggleTheme}>
                <img src={isDark ? sun_icon : moon_icon} alt="moon" className='w-4' />
                <p className='font-nunito font-semibold'>Dark Mode</p>
            </div>
        </header>
    );
}

export default Header