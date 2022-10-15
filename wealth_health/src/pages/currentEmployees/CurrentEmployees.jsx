import React from 'react';
import "./CurrentEmployees.css"

const CurrentEmployees = () => {
    return (
        <>
            


        <h2>Current Employees</h2>

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
            <p>First Name</p>
            <p>Last Name</p>
            <p>Start Date</p>
            <p>Department</p>
            <p>Date of Birth</p>
            <p>Street</p>
            <p>City</p>
            <p>State</p>
            <p>Zip Code</p>
        </section>
        <div className='detailList'>No data available in table</div>
        <footer>
            <p>Showing 0 to 0 of 0 entries</p>
            <p>Previous</p>
            <p>Next</p>
        </footer>
        </>
    );
};

export default CurrentEmployees;