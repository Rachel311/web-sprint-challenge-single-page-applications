import React from 'react';

function Pizza(props) {
    const { values, onChange, onSubmit } = props
    console.log(values);

    return (
        <div>
    
          <form onSubmit={onSubmit}>
              <div>
               <label> First Name 
                <input 
                 type="text"
                 name="first_name"
                 placeholder='enter your first name'
                 onChange={onChange}
                 value={values.first_name}
               />
               </label>
    
                <label> Last name
                    <input
                    type='text'
                    name='last_name'
                     placeholder='enter your last name'
                    onChange={onChange}
                    value={values.last_name}
    
                    />
                </label>
    
               <label> Special Instructions
                  <input 
                  type="text"
                  name="special instructions"
                  placeholder='special instructions'
                  onChange={onChange}
                  value={values.special_instructions}
                />
               </label>  
    
               <div>
                  <label> Pizza Size
                    <select name="Title" onChange={onChange} value={values.title}>
                      <option value="">---Select One---</option>
                      <option value="8 inch">8"</option>
                      <option value="12 inch">12"</option>
                      <option value="16 inch">16"</option>
                      <option value="20 inch">20"</option>
                    </select>
                  </label>
                </div>

                <div>
                    <div>{values.toppings}</div>
                    <label><div>Toppings:</div>
                    <input type='checkbox'>Cheese</input>
                    <input type='checkbox'>Mushrooms</input>
                    <input type='checkbox'>Olives</input>
                    <input type='checkbox'>Ham</input>
                    <input type='checkbox'>Sausage</input>
                    </label>
                </div>
    
            <div>
                <button> Submit </button>
            </div>
            
             
              </div>
            
          </form>
        </div>
      )
    }


export default Pizza