import React, { Component } from 'react';
import "./FormCreate.css"
import DatePicker from "./DatePicker"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {states} from "../../data/states"

//Gestion des listes dropdown
const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]
const defaultOptionDepart = "Departments";

const defaultOptionStates = "Select an option"
const statesFilter= (states) => {
    const tabStatesFilter = [];
    states.map(state => (
        tabStatesFilter.push(state.name)
    ))
    return tabStatesFilter;
}
const statesName= statesFilter(states)




class FormCreate extends Component {
    constructor() {
        super();
        this.state = {
            userInput: {
                first: "",
                last: "",
                birth: "",
                start: "",
                street: "",
                city: "",
                state: "",
                code: "",
                departments: ""
            } ,
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput : event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(item) {
        // no event 
        // pass the item to indexOf
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    // add item to deleteTodo.bind(this, item)
    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item" key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button>
                </div>    
            );
        });
    }

    render() {
        return(
            <>
            <form id="formulaire">
                
                <section className='employee'>

                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first" value={this.state.userInput.first} onChange={this.onChange.bind(this)} />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last" value={this.state.userInput.last} onChange={this.onChange.bind(this)} />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker  />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker  />

                </section>

                <section className='adresse'>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text"  />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text"  />
                    
                    <label htmlFor="state">State</label>
                    <Dropdown options={statesName} onChange={this._onSelect} value={defaultOptionStates} />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </section>

                <section className='department'>
                    <Dropdown options={departments} onChange={this._onSelect} value={defaultOptionDepart} placeholder="Select an option" />
                </section>

			</form>
            <button className="save" onClick={this.addTodo.bind(this)}>Save</button>
            
                <div className="list-group">
                    {this.renderTodos()}
                </div>

            </>
        );
    }
}

export default FormCreate;
