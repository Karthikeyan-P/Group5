import TableContainer from "./TableContainer";


export default class OrderTableComponent extends TableContainer {
    constructor(props) {
      super(props);
    }

    deleteEventName(){
        return "deleteOrder";
      }

    addEventName(){
      return "addOrder";
    } 

}