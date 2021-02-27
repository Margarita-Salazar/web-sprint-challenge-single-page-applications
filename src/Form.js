import React from 'react';
import { Link } from 'react-router-dom';

function Form(props){
    const { values, change, submit, errors, disable } = props;

    const onChange = (evt)=>{
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        change( name, valueToUse )
    }
    const onSubmit = (evt)=>{
        evt.preventDefault()
        submit()
    }

    return (
        <>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link> 
        <h1>Build Your Own Pizza</h1>
        <form onSubmit={onSubmit}>
            <select name="size" onChange={onChange}>
                <option value="">Select</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <label>
            Original Red
                <input 
                    type="radio" 
                    name="sauce" 
                    value="origninal-red"
                    checked={values.sauce === "origninal-red"}
                    onChange={onChange}
                />
            </label>
            <label>
            Garlic Ranch
                <input 
                    type="radio" 
                    name="sauce" 
                    value="garlic-ranch"
                    checked={values.sauce === "garlic-ranch"}
                    onChange={onChange}
                    />
            </label>
            <h4>Add Toppings</h4>
                <label>Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        value={values.pepperoni}
                        onChange={onChange}
                    ></input>
                </label>
                <label>Sausage
                    <input
                        type="checkbox"
                        name="pizzaSausage"
                        checked={values.pizzaSausage}
                        value={values.pizzaSausage}
                        onChange={onChange}
                    ></input>
                </label>
                <label>Canadian Bacon
                    <input
                        type="checkbox"
                        name="canadian"
                        checked={values.canadian}
                        value={values.canadian}
                        onChange={onChange}
                    ></input>
                </label>
                <label>Spicy Italian Sausage
                    <input
                        type="checkbox"
                        name="spicySausage"
                        checked={values.spicySausage}
                        value={values.spicySausage}
                        onChange={onChange}
                    ></input>
                </label>
            <h4>Special Instructions</h4>
                <input 
                    type="text" 
                    name="special" 
                    value={values.special} 
                    placeholder="Anything else you'd like to add"
                    onChange={onChange}
                    />
                <div>{errors.fname}</div>
                <input 
                    type="text" 
                    name="fname" 
                    value={values.fname} 
                    placeholder="name"
                    onChange={onChange}
                    />
                    

            <button disabled={disable}>Add to Order</button>
        </form>
        </>
    )
}
export default Form;