import React from 'react';
import "./CreateEmployee.css"
import FormCreate from "../../components/create/FormCreate"

const CreateEmployee = () => {

    return (
        <main>
            <h2 className='create'>Create Employee</h2>

            <FormCreate />

        </main>
    );
};

export default CreateEmployee;
