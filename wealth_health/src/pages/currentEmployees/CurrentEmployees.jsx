import React from 'react';
import "./CurrentEmployees.css"
import ListeData from "./../../components/current/listeData/ListeData"
//import {renderTodos} from "./../../components/create/Create"

const CurrentEmployees = () => {
    return (
        <>
        <h2 className='current'>list of employees
        </h2>

        

        <section className='enteteTable'>
            <ListeData />
        </section>

        
        </>
    );
};

export default CurrentEmployees;




