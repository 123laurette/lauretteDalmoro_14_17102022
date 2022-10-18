import React from 'react';
import "./CurrentEmployees.css"
import ListeData from "./../../components/current/listeData/ListeData"
//import {renderTodos} from "./../../components/create/Create"

const CurrentEmployees = () => {
    return (
        <>
        <h2 className='current'>Current Employees</h2>

        <section className='header'>
            <div className='gauche'>
                <p className='show'>Show</p>
                <span>liste déroulante</span>
                <p className='entries'>entries</p>
            </div>
            <div className='droite'>
                <p className='search'>Search</p>
                <input></input>
            </div>
        </section>

        <section className='enteteTable'>
            <ListeData />
        </section>

        <footer>
            <p>Showing 0 to 0 of 0 entries</p>
            <p>Previous</p>
            <p>Next</p>
        </footer>
        </>
    );
};

export default CurrentEmployees;