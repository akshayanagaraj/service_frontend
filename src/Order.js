import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL



export default function Order(props) {
    const  {orderstate, setOrderState} = props
    const [chalan_id, setChalanId] = useState('')
    const [phone_number, setPhonenumber] = useState('')
    const [error_msg, SetErrorMsg] = useState('')

    const history = useNavigate();
   
    
    const get_service_data = (chalan_id, phone_number) => {
        axios.get(`${API_URL}/accounts/service?chalan_id=${chalan_id}&phone_number=${phone_number}`)
            .then(function (response) {
                if (response.data.length === 0)
                SetErrorMsg('Incorrect Bill Details')
                else{
                  setOrderState(response.data[0])
                  history('/service/bill')
                }

                
                
            })
            .catch(function (error) {
            // handle error
                console.log(error);
            })
            // .then(function () {
            //     // always executed
            // });
    }
  return (
    <div>
    
    <Form style={{maxWidth:"900px", margin:'auto'}} >
        <h6>Service Bill Details</h6><br/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Chalan Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Chalan Number" value={chalan_id} onChange={(e) => {setChalanId(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" value={phone_number} onChange={(e) => {setPhonenumber(e.target.value)}}/>
      </Form.Group>
      {error_msg && (
        <p className="text-danger">{error_msg}</p>
      )}
      <Button variant="primary" onClick={() => get_service_data(chalan_id, phone_number)}>
        Submit
      </Button>
    </Form>
    </div>
    
  );

}
