import React, {Component} from 'react';
import PropTypes from "prop-types";
// import Navbar from "./Navbar";
// import User2 from "./User2";
import {Link} from "react-router-dom";
import axios from "axios";
import UserConsumer from "../context";


class User3 extends Component {
    state = {
        isVisible: false
    }

    // state icin pek kullanilmiyor
    /*constructor(props) {
        super(props);
        this.state = {
            test: 'Test',
            isVisible: true
        }
    }*/



    /*
    //bind(this) islemini constructor fonksiyonuunda da kullanabiliyoruz
    constructor(props) {
        super(props);
        this.onClickEvent = this.onClickEvent.bind(this)
    }*/



    /*
    //this objectinin user objectini gostermesi icin .bind(this) kullaniliyor.
    onClickEvent(e) {
        console.log(this);
    }*/



    //this objectinin user objectini gostermesi icin bu fonksiyon seklini kullanirsak bind islemine gerek yok.
    onClickEvent = (number, e) => {
        // console.log(this);
        // console.log(number);
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser = async (dispatch, e) => {
        const {id} = this.props;
        // Delete Request
        await axios.delete(`http://localhost:3001/users/${id}`);
        // Consumer Dispatch;
        dispatch({type: "DELETE_USER", payload: id});
    }


    /*componentWillUnmount() {
        console.log("componentWillUnmount")
    }*/


    render() {
        const {id, name, department, salary} = this.props
        const {isVisible} = this.state


        return(
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className="col-md-12 mb-4">
                                <div className="card" style={isVisible?{backgroundColor: "#E5E4E2", fontSize: "18px"}:null}>
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 style={{color: "blue"}} className="d-inline"
                                            onClick={this.onClickEvent.bind(this, "Adamsin")}>
                                            {name}
                                        </h4>
                                        <i onClick={this.onDeleteUser.bind(this, dispatch)} className="fa fa-times"
                                           style={{cursor: "pointer", fontSize: "24px"}}></i>
                                    </div>

                                    {
                                        isVisible ? <div className="card-body">
                                            <p className="card-text">Salary: {salary}</p>
                                            <p className="card-text">Department: {department}</p>
                                            <p> {this.state.test}</p>
                                            <Link to = {`edit/${id}`} className = "btn btn-dark btn-block" >Update User</Link>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        );
                    }
                }
            </UserConsumer>
        )
    }

}

User3.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,

}


User3.defaultProps = {
    name: "Bilgi Yok",
    department: "Bilgi Yok",
    salary: "Bilgi Yok"
}

export default User3;