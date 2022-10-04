import React from 'react'
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function OrderDetails(props) {
  const history = useNavigate();

  const {orderstate, setOrderState} = props
  console.log(orderstate,'orderstateesss', Object.keys(orderstate).length)
  return (
    <div className='text-center'>
      <span onClick={() => {history('/service')}} className='goback' >Go back</span><br/>
      {
        (Object.keys(orderstate).length === 0) ? <span>Details missing, please enter the info again</span> : (
        
          <Card style={{maxWidth:'900px', margin:'auto'}}>
        <Card.Header>Bill Details</Card.Header>
        <Card.Body>
          <Row>
            <Col>Chalan Id</Col>
            <Col>{orderstate.chalan_id  }</Col>
          </Row>
          <Row>
            <Col>Status</Col>
            <Col>{orderstate.status}</Col>
          </Row>
          <Row>
            <Col>Total Price</Col>
            <Col>{orderstate.total_price}</Col>
          </Row>
          <Row>
            <Col>Amount Paid</Col>
            <Col>{orderstate.amount_paid}</Col>
          </Row>
          <Row>
            <Col>Remaining Amount</Col>
            <Col>{orderstate.total_price - orderstate.amount_paid}</Col>
          </Row>
        </Card.Body>
      </Card>
        )
      }
    </div>
  )
}
