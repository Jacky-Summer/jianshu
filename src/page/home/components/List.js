import React, { Component } from 'react';
import { connect } from 'react-redux'
class List extends Component {
    render() {
        return (
           <div>List</div>
        );
    }
}
const mapState = (state) => {
    return {
        
    }
}
const mapDispatch = (dispatch) => {
    return {

    }
}
export default connect(mapState,mapDispatch)(List);