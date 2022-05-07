import React, { useState } from  'react';

const BoxesForm = (props) => {
    // State Variables
    //      state    update      default state
    //                state
    const [boxGen, setBoxGen] = useState([]); //set to empty array
    const [textColor, setTextColor] = useState("") //set to empty string

    const createBox = (e) => {
        // prevent default behavior of refreshing page
        e.preventDefault();
        // make a copy of state boxGen using spread
        const newBoxGen = [...boxGen]
        // console.log(newBoxGen)
        newBoxGen.push(textColor) //add the string value of textColor to array newBoxGen
        setBoxGen(newBoxGen)//Update boxGen array with added value
        setTextColor('') //clear the input to empty string after submit
    };

    return(
        <div>
        <form onSubmit={ createBox }> 
            <div>
                <h1>Enter a color to make a box!</h1>
                {/* <p>{JSON.stringify(textColor)}</p>
                <p>{JSON.stringify(boxGen)}</p> */}
                <label>Color: </label>                    
                <input type="color" value={textColor} onChange={ (e) => setTextColor(e.target.value) } />
            </div>
            <input type="submit" value="Add Color"/>
        </form>
        
        {   /*map through boxGen array and return each value with css styling */
            boxGen.map( (color, i) => {
                return <div key = {i} style = {{backgroundColor: color, height: 100, width: 100, display:'inline-block', margin:'1em'}} >
                </div>
            })
        }
        </div>
    );
};

export default BoxesForm;