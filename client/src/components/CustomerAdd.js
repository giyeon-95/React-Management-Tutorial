import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import axios from "axios";

function CustomerAdd (props) {
    let [customer, setCusomers] = useState(
        {
            file : null, 
            userName : '', 
            birthday : '',
            gender : '', 
            job : '', 
            fileName: '',
        }
    );

    return (
        <form>
            <h1>고객 추가</h1>
            <Button variant="contained">Contained</Button>
        </form>
    ); 
}

export default CustomerAdd;

