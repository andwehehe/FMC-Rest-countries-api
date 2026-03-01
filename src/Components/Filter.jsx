import arrowDown_icon from '/src/assets/images/down.png';
import { useState } from 'react';

function Filter({ setFilter }) { 

    const [ openFilter, setOpenFilter ] = useState(false);

    const toggleFilter = (e) => {
        setOpenFilter(prev => !prev);   
        setFilter(e.target.value);
    };

    const displayFilter = () => {
        setOpenFilter(prev => !prev);   
    }


    return(
       <fieldset className='font-nunito font-semibold text-sm w-max relative'>
        
            <button className='flex items-center gap-12 px-6 py-4 rounded shadow-search'
                onClick={displayFilter}
            >
                <span className='min-w-max'>Filter by Region</span>
                <img src={arrowDown_icon} alt="arrow down" className='w-4 h-4' />
            </button>

            <ul className="space-y-2 px-6 py-4 w-full rounded shadow-search hidden absolute bg-light-bg mt-2"
                style={{display: openFilter ? "block" : "none"}}
            >

                <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" name="region" 
                            value="all" defaultChecked onChange={toggleFilter} 
                            className="accent-blue-900 " 
                        />
                        <span>All</span>
                    </label>
                </li>

                <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" name="region" 
                            value="Africa" onChange={toggleFilter} 
                            className="accent-blue-900 " 
                        />
                        <span>Africa</span>
                    </label>
                </li>

                <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" name="region" 
                            value="Americas" onChange={toggleFilter} 
                            className="accent-blue-900 " 
                        />
                        <span>America</span>
                    </label>
                </li>

                <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" name="region"
                             value="Asia" onChange={toggleFilter} 
                            className="accent-blue-900 " 
                        />
                        <span>Asia</span>
                    </label>
                </li>

                <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" name="region" 
                            value="Europe" onChange={toggleFilter} 
                            className="accent-blue-900 " 
                        />
                        <span>Europe</span>
                    </label>
                </li>

                <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" name="region" 
                            value="Oceania" onChange={toggleFilter} 
                            className="accent-blue-900 " 
                        />
                        <span>Oceania</span>
                    </label>
                </li>
            </ul>
            
       </fieldset>
    );
}

export default Filter