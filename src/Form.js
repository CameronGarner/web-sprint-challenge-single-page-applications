import React from "react";



let Form = function(props){

let {oninput,order,errors,submit} = props

let onSubmit = function(event){
    event.preventDefault()
    submit()
    }
    
    let onChange = function(event){
        let {checked,value,name,type} = event.target
        let valued = type === "checkbox" ? checked : value
        oninput(name,valued)
    }

    return(
        <div>
            <h1>Build Your Own Pizza</h1>
    <div>{errors.name}</div>
        <form onSubmit={onSubmit}>
            <label>Name:
                <input
                name="name"
                type="text"
                onChange={onChange}
                value={order.name}
                />
            </label>
            <br/>

            <label>Size:
              <select
              name="size"
              onChange={onChange}
              value={order.size}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="XL">XL</option>
              </select>
            </label>
            <br/>
            {/*checkboxes*/}
            <label>Pepperoni
                <input
                type="checkbox"
                onChange={onChange}
                name="pepperoni"
                checked={order.pepperoni}
                />
            </label>
            <br/>

            <label>Sausage
                <input
                type="checkbox"
                onChange={onChange}
                name="sausage"
                checked={order.sausage}
                />
            </label>
            <br/>

            <label>Mushrooms
                <input
                type="checkbox"
                onChange={onChange}
                name="mushrooms"
                checked={order.mushrooms}
                />
            </label>
            <br/>

            <label>Spinach
                <input
                type="checkbox"
                onChange={onChange}
                name="spinach"
                checked={order.spinach}
                />
            </label>
            <br/>
            {/*end of checkboxes*/}
            <label>Instructions:
                <input
                type="text"
                onChange={onChange}
                name="instructions"
                value={order.instructions}
                />
            </label>
            <br/>

            <label>
                <input type="submit"/>
            </label>

        </form>
        </div>
    )
    }
    
    export default Form