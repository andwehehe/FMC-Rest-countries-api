import arrowDown_icon from '/src/assets/images/down.png';
import { useState } from 'react';

function Filter() {

    const [ openFilter, setOpenFilter ] = useState(false);

    const toggleFilter = () => {
        setOpenFilter(prev => !prev);
    };


    return(
       <fieldset className='font-nunito font-semibold text-sm mx-4 mt-12 w-max'>
        
            <button className='flex items-center gap-12 px-6 py-4 mb-2 rounded shadow-search'
                onClick={toggleFilter}
            >
                <span>Filter by Region</span>
                <img src={arrowDown_icon} alt="arrow down" className='w-4 h-4' />
            </button>

            <ul className="space-y-2 px-6 py-4 w-full rounded shadow-search hidden"
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
                            value="africa" onChange={toggleFilter} 
                            className="accent-blue-900 " 
                        />
                        <span>Africa</span>
                    </label>
                </li>

                <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" name="region" 
                            value="america" onChange={toggleFilter} 
                            className="accent-blue-900 " 
                        />
                        <span>America</span>
                    </label>
                </li>

                <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" name="region"
                             value="asia" onChange={toggleFilter} 
                            className="accent-blue-900 " 
                        />
                        <span>Asia</span>
                    </label>
                </li>

                <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" name="region" 
                            value="europe" onChange={toggleFilter} 
                            className="accent-blue-900 " 
                        />
                        <span>Europe</span>
                    </label>
                </li>

                <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" name="region" 
                            value="oceania" onChange={toggleFilter} 
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