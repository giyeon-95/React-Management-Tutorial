import React from "react"; 

function Customer (props){
    return (
        <div>
            <CustomerProfile id={props.id} image ={props.image} name={props.name}/>
            <CustomerInfo birth={props.birth} gender ={props.gender} job ={props.job}/>
        </div> 
        
    ); 
}

function CustomerProfile (props) {
    return (
      <div>
          <img src={props['image']} alt="profile" />
          <h2>{props['name']}({props['id']})</h2>
      </div>  
    );
}

function CustomerInfo (props){
    return (
        <div>
            <p>{props['birth']}</p>
            <p>{props['gender']}</p>
            <p>{props['job']}</p>
        </div>
    )
}
 


export default Customer;