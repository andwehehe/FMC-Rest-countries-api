import moon_icon from '/src/assets/images/moon.png';

function Header() {

    return(
        <header className='flex justify-between items center px-4 py-8 shadow-md'>
            <h1 className='font-nunito font-extrabold '>
                Where in the world?
            </h1>
            <div className='flex items-center gap-2'>
                <img src={moon_icon} alt="moon" className='w-4' />
                <p className='font-nunito font-semibold'>Dark Mode</p>
            </div>
        </header>
    );
}

export default Header