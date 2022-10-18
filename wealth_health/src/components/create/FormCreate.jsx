import React, { Component } from 'react';
import "./FormCreate.css"

class FormCreate extends Component {
    constructor() {
        super();
        this.state = {
            userInput: {
                first: "",
                last: ""
            } ,
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
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
                    <input type="text" id="first-name" value={this.state.userInput.first} onChange={this.onChange.bind(this)} />
                    
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" value={this.state.userInput.last} onChange={this.onChange.bind(this)} />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="date" value={this.state.userInput} onChange={this.onChange.bind(this)} />

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="date" value={this.state.userInput} onChange={this.onChange.bind(this)} />
                </section>

                <section className='adresse'>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text"  />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text"  />
        {/*inserer une liste pour les states*/}
                    <label htmlFor="state">State</label>
                    <input name="state" id="state" ></input>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </section>

                <section className='department'>
                    <select name="department" id="department" >
                        <option>Department</option>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
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
