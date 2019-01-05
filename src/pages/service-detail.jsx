import React, {Component} from "react";
import api from "../core/api";
class ServiceDetail extends Component {

    state = {
        isLoading: true,
        serviceDetail: [],
      };

   async componentWillMount() {
       const serviceDetail = await api.getServiceByID(this.props.typeId, this.props.serviceId)
       this.setState({serviceDetail})
    }
    
    render(){
        const details = this.state.serviceDetail
        return(<div>{Object.keys(details).map(function(keyName) {
            return(<p key={keyName}>{keyName}: {details[keyName]}</p>)
          })}</div>)}}

export default ServiceDetail;
