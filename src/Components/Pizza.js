import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function Pizza() {
    const [pizza, setPizza] = useState({
        user_name: "",
        pizza_size: "",
        pizza_mushroom: "",
        pizza_sausage: "",
        pizza_olive: "",
        pizza_pepperoni: "",
        special_instructions: ""
    })

    const onChange = e => {
        e.persist()
        let value = e.target.type === "radio" ? e.target.checked : e.target.value
        setPizza({
            ...pizza, 
            [e.target.name] : value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axios.post(`https://reqres.in/api/users`, pizza)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
    
          <form onSubmit={onSubmit}>
              <div>
               <label for="user_name"> Enter Name</label>
               <input 
                 type="text"
                 name="user_name"
                 id="user_name"
                 placeholder='enter your name'
                 onChange={onChange}
                 value={pizza.user_name}
               />

               
    
    
               <label for="special_instructions">Special Instructions</label>  
               <input 
                  type="text"
                  name="special_instructions"
                  id="special_instructions"
                  placeholder='special instructions'
                  onChange={onChange}
                  value={pizza.special_instructions}
                />
    
               <div>
                  <label for="size"> Pizza Size</label>
                    <select
                     name="size" 
                     id="size" 
                     onChange={onChange} 
                    //  value={pizza.pizza_size}
                     >
                      <option value="">---Select One---</option>
                      <option value="8 inch">8"</option>
                      <option value="12 inch">12"</option>
                      <option value="16 inch">16"</option>
                      <option value="20 inch">20"</option>
                    </select>
                  
                </div>

                <div>
                    <label for = "mushroom">Mushrooms</label>
                    <input type = "radio" name = "mushroom" value ={pizza.pizza_mushroom} onChange={onChange}></input>
                    <label for = "sausage">Sausage</label>
                    <input type = "radio" name = "sausage" value ={pizza.pizza_sausage} onChange={onChange}></input>
                    <label for = "olive">Olives</label>
                    <input type = "radio" name = "olive" value ={pizza.pizza_olive} onChange={onChange}></input>
                    <label for = "pepperoni">Pepperoni</label>
                    <input type = "radio" name = "pepperoni" value ={pizza.pizza_pepperoni} onChange={onChange}></input>
                </div>
    
            <div>
                <button> Add to Order </button>
            </div>
            
             
              </div>
            
          </form>
        </div>
      )
    }


export default Pizza