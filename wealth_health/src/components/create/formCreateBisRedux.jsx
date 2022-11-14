/*import React from 'react';
import { useState } from 'react';
import "./FormCreate.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {states} from "../../data/states";
import {useDispatch, useSelector} from "redux"

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






let tabItem = []

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

    const dispatch = useDispatch()

    const getCountEmployees = useSelector(selectEmployees).data.lenght
    const item = {
    "id": getCountEmployees + 1,
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

    function chekForm() {
        setIsValidFirstName(true)
        setIsValidLastName(true)

        if (firstName === "") {
            setIsValidFirstName(false)
            dispatch(unvalidForm())
        }
        if (lastName === "") {
            setIsValidLastName(false)
            dispatch(unvalidForm())
        }
        if ((firstName === "") || (lastName === "")) {
            dispatch(unvalidForm())
        }
        else {
            dispatch(validForm())
        }
    }

    function validateForm(e) {
        e.preventDefault()
        chekForm()
        const submission = dispatch(checkValid())

        if (submission) {
            dispatch (submitForm(item))
            setFormIsValid(true)
            setBirth(new Date())
            setStart(new Date())
            setIsOpen(true)
        }
        else {
            setFormIsValid(false)
        }
    }

     //permet de récupérer l'item avec toutes les nouvelles données

    const renderDatas= () => (
        tabItem.push(item)
    )
    console.log (tabItem)
    
*/