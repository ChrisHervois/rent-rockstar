import React from 'react';
import { Row, Input, Icon, Button } from 'react-materialize'
import { Link } from 'react-router-dom';

const ReserveForm = (props) => {
    
    

    
    return (
        <div className="center login" >
            <Row>
                <Input s={6} label="Name" defaultValue="Jack Belt"><Icon>account_circle</Icon></Input>
                <Input s={6} label="Contact" defaultValue="(123) 456-7890" validate type='tel'><Icon>phone</Icon></Input>
            </Row>
            <Row>
                <Input s={4} label="Start Date" defaultValue="7/25/2018"></Input>
                <Input s={4} label="End Date" defaultValue="7/29/2018"></Input>
                <Input s={4} type='select' label="Time for Pickup" defaultValue='2'>
                    <option value='1'>Morning</option>
                    <option value='2'>Afternoon</option>
                    <option value='3'>Evening</option>
                </Input>
            </Row>
            { 
                props.match ? <Link to="/browse"><Button className="blue-grey darken-2" >Reserve Item</Button></Link> : null
            }
        </div>
    )
};

export default ReserveForm;