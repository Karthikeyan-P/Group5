import { React, useState, } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './style.css';
import eventBus from './eventBus';
import {
    MDBRow,
    MDBCol,
    MDBInput,

} from 'mdb-react-ui-kit';

const RestaurantForm = () => {
    const [nameClass, setnameClass] = useState("default");
    const [idClass, setidClass] = useState("default");
    const [contactClass, setcontactClass] = useState("default");

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        if (!(validateId(data.get('class')) && validateName(data.get('name')) && validateContact(data.get('contact')))) {
            alert("Invalid Data. Please provide right info.")
            return;
        }

        var restaurantNew = {
            "restaurantName": data.get('name'),
            "restaurantId": data.get('id'),
            "restaurantCuisine": data.get('cuisine'),
            "restaurantAddress": data.get('address'),
            "restaurantStation": data.get('station'),
            "restaurantEmail": data.get('email'),
            "restaurantContact": data.get('contact'),
            "restaurantAddon": data.get('addon')
        }

        console.log("restaurantNew     ", restaurantNew)

            // fetch("http://127.0.0.1:8082/addRestaurant/", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(
    //     restaurantNew 
    //   ),
    // })
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       eventBus.dispatch('addRestaurant', result);
    //     },
    //     (error) => {
    //       console.log(error)
    //     }
    //   )

    }

    function onNameChangeListener(event) {
        var name = event.target.value;
        var styleClass = validateName(name) ? 'default' : 'invalid';
        setnameClass(styleClass);

    }

    function onIdChangeListener(event) {
        var name = event.target.value;
        var styleClass = validateId(name) ? 'default' : 'invalid';
        setidClass(styleClass);


    }

    function onContactChangeListener(event) {
        var name = event.target.value;
        var styleClass = validateContact(name) ? 'default' : 'invalid';
        setcontactClass(styleClass);

    }
    function validateName(data) {
        const regex = new RegExp('^[a-zA-Z ]+$');
        return regex.test(data);
    }

    function validateId(data) {
        const regex = new RegExp('^([1-9]|1[0-2])$');
        return regex.test(data);
    }

    function validateContact(data) {
        const regex = new RegExp('^[0-9]{10}$');
        return regex.test(data);
    }

    return (
        <Form onSubmit={handleSubmit} >
            <MDBRow className='mb-4'>
                <MDBCol>
                    <MDBInput id='name' name='name' placeholder='Name' className={nameClass} onChange={onNameChangeListener} />
                </MDBCol>
                <MDBCol>
                    <MDBInput id='id' name='id' placeholder='Restaurant ID' className={idClass} onChange={onIdChangeListener} />
                </MDBCol>
            </MDBRow>
            <MDBInput wrapperClass='mb-4' id='cuisine' name='cuisine' placeholder='Cuisine' />

            <MDBInput wrapperClass='mb-4' id='address' name='address' placeholder='Address' />
            <MDBInput wrapperClass='mb-4' id='station' name='station' placeholder='Nearby Station' />
            <MDBInput wrapperClass='mb-4' type='email' id='email' name='email' placeholder='Email' />
            <MDBInput wrapperClass='mb-4' type='tel' id='contact' name='contact' placeholder='Contact Number' className={contactClass} onChange={onContactChangeListener} />

            <MDBInput wrapperClass='mb-4' textarea id='addon' name='addon' rows={4} placeholder='Additional Information' />

            <Button className='mb-4' type='submit'>
                Submit Restaurant
            </Button>
        </Form>
    );
}

export default RestaurantForm;