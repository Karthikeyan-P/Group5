import { React, useState, } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './style.css';
import eventBus from './eventBus';
import { FormControlLabel, RadioGroup, Radio } from '@mui/material';
import {
    MDBRow,
    MDBCol,
    MDBInput,

} from 'mdb-react-ui-kit';

const MenuForm = () => {
    const [nameClass, setnameClass] = useState("default");
    const [idClass, setidClass] = useState("default");
    const [cuisineClass, setcuisineClass] = useState("default");

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        if (!(validateId(data.get('class')) && validateName(data.get('name')) && validateCuisine(data.get('cuisine')))) {
            alert("Invalid Data. Please provide right info.")
            return;
        }

        var foodItemNew = {
            "foodName": data.get('foodname'),
            "foodId": data.get('id'),
            "foodCuisine": data.get('cuisine'),
            "foodCategory": data.get('category'),
            "foodQuantity": data.get('quantity'),
            "foodPrice": data.get('price'),
            "foodDesc": data.get('desc'),
            "foodType": data.get('food-type')
        }

        console.log("foodNew     ", foodItemNew)
        eventBus.dispatch('addfood', foodItemNew);

        // fetch("http://127.0.0.1:8082/addMenuItem/", {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(
        //     foodItemNew 
        //   ),
        // })
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //       eventBus.dispatch('addfood', result);
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

    function onCuisineChangeListener(event) {
        var name = event.target.value;
        var styleClass = validateCuisine(name) ? 'default' : 'invalid';
        setcuisineClass(styleClass);

    }
    function validateName(data) {
        const regex = new RegExp('^[a-zA-Z ]+$');
        return regex.test(data);
    }

    function validateId(data) {
        const regex = new RegExp('^([0-9])*$');
        return regex.test(data);
    }

    function validateCuisine(data) {
        // const regex = new RegExp('^[0-9]{10}$');
        const regex = new RegExp('^[a-zA-Z ]+$');
        return regex.test(data);
    }

    return (
        <Form onSubmit={handleSubmit} >
            <MDBRow className='mb-4'>
                <MDBCol>
                    <MDBInput id='id' name='id' placeholder='Restaurant ID' className={idClass} onChange={onIdChangeListener} />
                </MDBCol>
                <MDBCol>
                    <MDBInput id='foodname' name='foodname' placeholder='Food Name' className={nameClass} onChange={onNameChangeListener} />
                </MDBCol>
            </MDBRow>

            <MDBRow className='mb-4'>
                <MDBCol>
                    <MDBInput wrapperClass='mb-4' id='cuisine' name='cuisine' placeholder='Cuisine' className={cuisineClass} onChange={onCuisineChangeListener} />
                </MDBCol>
                <MDBCol>
                    <MDBInput wrapperClass='mb-4' id='category' name='category' placeholder='Category' />
                </MDBCol>
                <MDBCol>
                    <MDBInput wrapperClass='mb-4' id='quantity' name='quantity' placeholder='Quantity' />
                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-4'>
                <MDBCol>
            <MDBInput wrapperClass='mb-4' id='price' name='price' placeholder='Price (Inclusive of all taxes)' />
            </MDBCol>
            <MDBCol>
            <RadioGroup row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="veg"
                name="food-type" >
                <FormControlLabel value="veg" control={<Radio />} label="Veg" />
                <FormControlLabel value="nonveg" control={<Radio />} label="Non Veg" />
            </RadioGroup>
            </MDBCol>
            </MDBRow>
            <MDBInput wrapperClass='mb-4' textarea id='desc' name='desc' rows={4} placeholder='Food description' />

            <Button className='mb-4' type='submit'>
                Add Menu Item
            </Button>
        </Form>
    );
}

export default MenuForm;