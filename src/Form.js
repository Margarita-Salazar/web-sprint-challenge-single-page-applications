import React from 'react';

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
            <label>
            Pepperoni
                <input 
                    type="checkbox" 
                    name="pepperoni"
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
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
    )
}
export default Form;