import React from 'react'
import './style.css'

class OrderMechanisms extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            orderMechanism: "Order Via PNR"
        }
    }

    handleMechanisms = (event) => {
        var choice = event.target.innerText
        if (choice == "Order Via Train Number") {
            this.setState({ orderMechanism: "Order Via Train Number" })
        }
        else if (choice == "Order Via PNR") {
            this.setState({ orderMechanism: "Order Via PNR" })
        }
        else {
            this.setState({ orderMechanism: "Track Live Location" })
        }
    }


    render() {
        let inputSet
        if (this.state.orderMechanism === "Order Via PNR") {
            inputSet = <input type="text" id="pnr" placeholder="Enter 10 digit PNR" />
        }
        else if (this.state.orderMechanism === "Order Via Train Number") {
            inputSet =
                <div className="train-info">
                    <input type="text" id="train-no" placeholder="Enter Train Number"></input>
                    <input type="date" id="boarding-date" placeholder="Boarding Date"></input>
                </div>
        }
        else {
            inputSet = <p style={{textAlign: "center", color: "red"}}>Curently Unavaiable</p>
        }
        return (
            <div className="order-mechanisms">
                <div>
                    <a id="pnr" onClick={this.handleMechanisms}>Order Via PNR</a>
                    <a id="trainNo" onClick={this.handleMechanisms}>Order Via Train Number</a>
                    <a onClick={this.handleMechanisms}>Track Live Location</a>
                </div>
            {inputSet}
            </div>
        )
    }
}

export default OrderMechanisms