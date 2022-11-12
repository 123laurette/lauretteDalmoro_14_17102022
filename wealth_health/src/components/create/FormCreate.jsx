import React from 'react';
import { useState } from 'react';
import "./FormCreate.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {states} from "../../data/states"

//***************Gestion des listes dropdown************
const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]

let tabStatesFilter = [];

const statesFilter= (states) => {
    states.map(state => (
        tabStatesFilter.push(state.name)
    ))
    return tabStatesFilter;
}
const statesName= statesFilter(states)

//****************************************************** 

//***************Gestion des datePicker***************** 

function formatDate(date) {
    const dateNew = new Date(date)
    const dateISO = dateNew.toISOString().split("T")[0]
    console.log(dateISO)

    const [year, month, day] = dateISO.split(".")

    return [month, day,year].join("/")
}

//********************************************************

function CreateEmployee() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthDate, setBirthDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [stateList, setStateList] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [department, setDepartment] = useState("")

    const item = {
    "firstName": firstName,
    "lastName": lastName,
    "birthDate": formatDate(birthDate),
    "startDate": formatDate(startDate),
    "street": street,
    "city": city,
    "stateList": stateList,
    "zipCode": zipCode,
    "department": department,
    }


     //permet de récupérer l'item avec toutes les nouvelles données
let tabItem = []
const renderTodos= () => (
        tabItem.push(item)
    )
console.log (tabItem)

    /*function deleteTodo(item) {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }*/
   

    
        return(
            <>
            <form id="formulaire">
                
                <section className='employee'>

                <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first" value={setFirstName.toLowerCase} onChange={(e) => setFirstName(e.target.value)} />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last" value={setLastName.toLowerCase} onChange={(e) => setLastName(e.target.value)}  />



                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker  name="birth" selected={birthDate} onChange={setBirthDate} value={birthDate} />
                    
                    
                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker  name="start" selected={startDate} onChange={setStartDate} value={startDate} />

                </section>

                <section className='adresse'>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street" value={setStreet.toLowerCase} onChange={(e) => setStreet(e.target.value)}  />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text"  name="city" value={setCity.toLowerCase} onChange={(e) => setCity(e.target.value)} />
                    
                    <label htmlFor="state">State</label>
                    <Dropdown  placeholder="Select an option"name="state" options={statesName} selected={stateList} onChange={setStateList} />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="text" name="code" value={setZipCode.toLowerCase} onChange={(e) => setZipCode(e.target.value)}/>
                </section>

                <section className='department'>
                    <Dropdown options={departments} placeholder="Departments" name="departments" selected={departments} onChange={setDepartment} />
                </section>

			</form>
            <button className="save" >Save</button>
            
            
                <div className="list-group">
                    {renderTodos(tabItem)} 
                </div>

            </>
        );
    }


export default CreateEmployee;





/*reflexion :
les values du formulaire sont récupérées dans item fonction renderTodos
importer la fonction renderTodos dans le fichier ListeData et la mettre en relation avec une constante data
*/