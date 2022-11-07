import React, { Component } from 'react';
import "./FormCreate.css"
import DatePicker from "./DatePicker"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {states} from "../../data/states"

//Gestion des listes dropdown
const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]

let tabStatesFilter = [];

const statesFilter= (states) => {
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
                first: "",
                last: "",
                birth: "",
                start: "",
                street: "",
                city: "",
                state: "",
                code: "",
                departments: "",
                items: []
        };
        this.onChange = this.onChange.bind(this)
    }
    
    onChange(event) {
        const name = event.target.name
        this.setState({
                [name]:event.target.value
        });
    }

    /*onChangeLast(event) {
        this.setState({
                last:event.target.value
        });
    }

    onChangeBirth(event) {
        this.setState({
                birth:event.target.value
        });
    }

    onChangeStart(event) {
        this.setState({
                start:event.target.value
        });
    }

    onChangeStreet(event) {
        this.setState({
                street:event.target.value
        });
    }

    onChangeCity(event) {
        this.setState({
                city:event.target.value
        });
    }

    onChangeState(event) {
        this.setState({
                state:event.target.value
        });
    }

    onChangeCode(event) {
        this.setState({
                code:event.target.value
        });
    }

    onChangeDepartments(event) {
        this.setState({
                departments:event.target.value
        });
    }*/

    addTodo(event) {
        event.preventDefault();
        this.setState({
            first: "",
            last: "",
            birth: "",
            start: "",
            street: "",
            city: "",
            state: "",
            code: "",
            departments: "",
            items: [this.state.first, this.state.last, this.state.birth, this.state.start, this.state.street, this.state.city, this.state.state, this.state.code, this.state.departments]
        });
    }

    deleteTodo(item) {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }
    //permet de récupérer l'item avec toutes les nouvelles données
    renderTodos() {

        return this.state.items.map((item) => {
            console.log(item)  

            return (
                <div className="list-group-item" key={item}>
                    {item}
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
                    <input type="text" id="first-name" name="first" value={this.state.first} onChange={this.onChange} />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last" value={this.state.last} onChange={this.onChange} />



                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker  name="birth" value={this.state.birth} />
                    
                    
                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker  name="start" value={this.state.start}  />

                </section>

                <section className='adresse'>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street" value={this.state.street} onChange={this.onChange}  />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text"  name="city" value={this.state.city} onChange={this.onChange}/>
                    
                    <label htmlFor="state">State</label>
                    <Dropdown options={statesName} onChange={this._onSelect} placeholder="Select an option"name="state" value={this.state.state}  />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="text" name="code" value={this.state.code} onChange={this.onChange} />
                </section>

                <section className='department'>
                    <Dropdown options={departments} onChange={this._onSelect} placeholder="Departments" name="departments" value={this.state.departments} />
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



//date, state et departments ne se stockent pas
//state et departments ne se remettent pas à zéro

/*reflexion :
les values du formulaire sont récupérées dans item fonction renderTodos
importer la fonction renderTodos dans le fichier ListeData et la mettre en relation avec une constante data
*/