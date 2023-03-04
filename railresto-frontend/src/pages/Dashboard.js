import { Container,Row, Col, Table } from "reactstrap";
import { useMemo, useEffect, useState } from "react";
import RejectOrderButton from "../components/RejectOrderButton";
import OrderTableComponent from "../components/OrderTableComponent";

const orderDetails = require('../api/orderDetails.json')
let today = new Date();
console.log("parse   ", new Date("2023-02-26"))
console.log("now   ", today)
var filterorderDetails = orderDetails.filter( e => e.orderStatus != "Delivered" && new Date(e.orderDeliveryDate).getDate() == today.getDate() && new Date(e.orderDeliveryDate).getMonth() == today.getMonth() && new Date(e.orderDeliveryDate).getYear() == today.getYear() );
console.log("filterorderDetails   ", filterorderDetails)


const Dashboard = () => {

//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   useEffect(() => {
    // fetch("http://127.0.0.1:8082/vaccineDrive/?format=json")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
        //   setIsLoaded(true);
        //   result = result.filter( e => Date.parse(e.orderDeliveryDate) == Date.now() );
        //   setItems(result);
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
//     //   )
//   }, [])

    const columnsOrder = useMemo(
        () => [
          {
            Header: "Id",
            accessor: "orderId"
          },
          {
            Header: "Delivery Date",
            accessor: "orderDeliveryDate",
          },
          {
            Header: "Order Status",
            accessor: "orderStatus",
          },
          {
            Header: "",
            accessor: "rejectButton",
            type: "button",
            Cell: ({ cell }) => {
              const { value } = cell;
              return (
                <RejectOrderButton cell={cell} />
              );
            },
          }
        ],
        []
      )


    
    return ( <Container style={{ marginTop: 100 }}>
      
        <Row><center><h1>Dashboard</h1></center></Row>
        <Row>
          <Col ><center><h3>Order Details</h3></center></Col>
        </Row>
    <Row>
          <Col ><OrderTableComponent columns={columnsOrder} data={filterorderDetails}/></Col>
        </Row>
    </Container>);
};

export default Dashboard;