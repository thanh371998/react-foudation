import React from "react";
import Button from "./Button";
function State(){
  const [firstName, setFirstName] = React.useState('truong')
  const [lastName, setLastName] = React.useState('nguyen')

 function handleChangeName(){
    setFirstName('truong2');
    setLastName('nguyen2');
 }
 return(
    <div>
        <h2>state</h2>
        First:{firstName} <br/>
        last:{lastName} <br/>

        <button text="Change Name" onClick={handleChangeName}>doiten</button>
       
    </div>
 )

}
export default State;