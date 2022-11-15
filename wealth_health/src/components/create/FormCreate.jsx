import React from 'react';
import { useState } from 'react';
import "./FormCreate.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {states} from "../../data/states";
import Modale from "laurette_modale/dist/Button"
import "laurette_modale/dist/Modale.css"

//import {useDispatch, useSelector} from "redux"



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
    const [year, month, day] = dateISO.split(".")

    return [month, day,year].join("/")
}

//********************************************************

let item = []

function CreateEmployee() {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [birth, setBirth] = useState(new Date())
    const [start, setStart] = useState(new Date())
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [stateList, setStateList] = useState("")
    const [code, setCode] = useState("")
    const [department, setDepartment] = useState("")

    //const dispatch = useDispatch()

    item = {
    "first": first,
    "last": last,
    "birth": formatDate(birth),
    "start": formatDate(start),
    "street": street,
    "city": city,
    "stateList": stateList,
    "code": code,
    "department": department,
    }
    console.log(item)
     //permet de récupérer l'item avec toutes les nouvelles données

   
    
        return(
            <>

                <form id="formulaire">

                    <section className='employee'>

                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first" name="first" onChange={(e) => setFirst(e.target.value)} />

                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last" name="last" onChange={(e) => setLast(e.target.value)} />



                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <DatePicker name="birth" selected={birth} onChange={setBirth} value={birth} />


                        <label htmlFor="start-date">Start Date</label>
                        <DatePicker name="start" selected={start} onChange={setStart} value={start} />

                    </section>

                    <section className='adresse'>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" name="street" onChange={(e) => setStreet(e.target.value)} />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name="city" onChange={(e) => setCity(e.target.value)} />

                        <label htmlFor="state">State</label>
                        <Dropdown placeholder="Select an option" name="stateList" options={statesName} selected={stateList} onChange={setStateList} />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="text" name="code" onChange={(e) => setCode(e.target.value)} />
                    </section>

                    <section className='department'>
                        <Dropdown options={departments} placeholder="Departments" name="departments" selected={departments} onChange={setDepartment} />
                    </section>

                    
                </form>
                    <Modale textButton="save"
                /> 
               
                </>
        );

}



export {item}
export default CreateEmployee





/*reflexion :
les values du formulaire sont récupérées dans item fonction renderTodos
importer la fonction renderTodos dans le fichier ListeData et la mettre en relation avec une constante data
*/


/*pour info, j'ai dissocié le css des fichiers jsx dans mon plugin, pour pouvoir le modifier quand je l'intègre dans mon projet
donc dans mon readme du plugin il faudra que je précise d'importer le css button et modale pour avoir une mise en style*/