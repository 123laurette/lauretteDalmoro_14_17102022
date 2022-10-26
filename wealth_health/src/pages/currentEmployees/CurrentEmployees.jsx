import React from 'react';
import "./CurrentEmployees.css"
import ListeData from "./../../components/current/listeData/ListeData"
import InputSearch from '../../components/current/inputSearch/InputSearch';
//import {renderTodos} from "./../../components/create/Create"

const CurrentEmployees = () => {
    return (
        <>
        <h2 className='current'>list of employees
        </h2>

        <div className='inputSearch'>
            <InputSearch /> 
        </div>

        <section className='enteteTable'>
            <ListeData />
        </section>

        
        </>
    );
};

export default CurrentEmployees;