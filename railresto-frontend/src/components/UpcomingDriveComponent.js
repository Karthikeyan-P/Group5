import TableContainer from "./TableContainer";


export default class UpcomingDriveComponent extends TableContainer {
    constructor(props) {
      super(props);
    }

    deleteEventName(){
        return "removeOrder";
      }

    updateEventName(){
      return "updateOrder";
    } 

    primaryKeyAccessor(){
      return 'orderId';
    }

    render(){
      if(!this.state.data.length){
        return(<><center><h3>No Upcoming Orders!</h3></center></>);
      }
      return TableContainer.prototype.render.call(this);
    }

}