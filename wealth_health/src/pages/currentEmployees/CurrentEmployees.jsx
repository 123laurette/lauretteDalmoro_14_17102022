import React from 'react';
import "./CurrentEmployees.css"
import ListeData from "./../../components/current/listeData/ListeData"
//import {renderTodos} from "./../../components/create/Create"

const CurrentEmployees = () => {
    return (
        <>
        

        <section className='enteteTable'>
        <h2 className='current'>list of employees
        </h2>
            <ListeData />
        </section>

        
        </>
    );
};

export default CurrentEmployees;




