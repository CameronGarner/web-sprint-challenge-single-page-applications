import React, {useState} from "react";
import { Route } from 'react-router-dom'
import Home from "./Home"
import Form from "./Form"
import axios from "axios"
import * as yup from "yup"
import schema from "./Schema"

let orderinitialvalues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  spinach: false,
  instructions: ""
}

let initilaerrors = {
  name: "",
  size: "",
  pepperoni: "",
  sausage: "",
  mushrooms: "",
  spinach: "",
  instructions: ""
}

const App = function(){
  let [order,setorder] = useState(orderinitialvalues)
  let [errors,seterrors] = useState(initilaerrors)
 

  let oninput = function(name,value){
    yup.reach(schema,name)
    .validate(value)
    .then(function(){
      seterrors({
        ...errors,[name]: ""
      })
    })
    .catch(function(error){
      seterrors({
        ...errors,[name]: error.errors[0]
      })
    })

    setorder({...order,[name]:value})
  }

  let submit = function(){
    let neworder = {
      name: order.name.trim(),
      size: order.size.trim(),
      pepperoni: order.pepperoni,
      sausage: order.sausage,
      mushrooms: order.mushrooms,
      spinach: order.spinach,
      instructions: order.instructions.trim()
    }
    postneworder(neworder)
  }

  let postneworder = function(neworder){
    axios.post("https://reqres.in/api/users",neworder)
    .then(function(data){
      console.log(data.data)
    })
  }

  return(
    <div>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/pizza">
        <Form order={order} oninput={oninput} errors={errors} submit={submit}/>
      </Route>
    </div>
  );
}
 

export default App;
