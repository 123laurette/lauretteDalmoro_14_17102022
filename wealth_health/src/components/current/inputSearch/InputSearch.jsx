import React from 'react';
import "./InputSearch.css"
import { useState, useEffect } from 'react';

const InputSearch = () => {
    const [datas, setDatas] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        console.log(setDatas)
/*setDatas sera  utilisé à la récup des datas*/
    }, []);

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        value.lenght > 2 && setSearchTerm(value);
    }

    return (
        <>
            <p className='search'>Search</p>
                <input
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder='to research'
                onChange={handleSearchTerm}/>
            <div className='search_results'>
                {datas.filter((val) => {
                    return val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase());
                })
                .map((val) => {
                    return (
                        <div className='search_result' key={val.id}>{val.title}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default InputSearch;