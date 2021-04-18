import React from 'react';
import { Link } from 'react-router-dom'

function Form(props) {
    const { values, onSubmit } = props
    console.log(values);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Do you want to order a pizza?</h1>
                <span></span>
                <h2>Click the button to build your custom pizza!</h2>
                <div>
                <Link to="/pizza">
                <button>Click Here!</button>
                </Link>
                
                </div>
            </form>
                
             
        </div>

    )}
export default Form