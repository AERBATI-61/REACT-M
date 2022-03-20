// rcc + tab
// impt + tab

import React, {Component} from 'react';
// import PropTypes from "prop-types";
// import Navbar from "./Navbar";

class User2 extends Component {

    // Eger veri gonderilmez ise otomatik olarak degeri Bilgi Yok halinde olacak
    static defaultProps = {
        name: "Bilgi Yok",
        department: "Bilgi Yok",
        salary: "Bilgi Yok"
    }

    render() {
        // javascript'teki Destructing yapisi ile this.props.name'den kurtulmus oluyoruz
        const {name, department, salary} = this.props
        return (
            <div>

                <ul>
                    <li>name: Arafat 1
                    </li>
                    <li>Department: BM</li>
                    <li>Salary: 30000</li>
                </ul>

                <ul>
                    <li>name: {this.props.name} 2 </li>
                    <li>Department: {this.props.department}</li>
                    <li>Salary: {this.props.salary}</li>
                </ul>

                <ul>
                    <li>name: {name} 3</li>
                    <li>Department: {department}</li>
                    <li>Salary: {salary}</li>
                </ul>
            </div>
        );
    }

}



/*
    User2.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
    }
*/

User2.defaultProps = {
    name: "Bilgi Yok",
    department: "Bilgi Yok",
    salary: "Bilgi Yok"
}
export default User2;