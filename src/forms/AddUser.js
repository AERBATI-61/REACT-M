import React, {Component} from 'react';
import axios from "axios";
import UserConsumer from "../context";

// import posed from 'react-pose';

// const Animation = posed.div({
//     visible: {
//         opacity: 1
//     },
//     hidden : {
//         opacity: 0
//     }
// });


class AddUser extends Component {

    state = {
        isVisible: false,
        name: "",
        department: "",
        salary: "",
        error: false

    }

    validateForm = () => {
        const {name, department, salary} = this.state;
        if (name === "" || salary === "" || department === "") {
            return false
        }
        return true;
    }

    changeVisibile = (e) => {

        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    /*    ChangeName = (e) => {
            this.setState({
                name: e.target.value
            })

        }
        ChangeDepartment = (e) => {
            this.setState({
                department: e.target.value
            })

        }
        ChangeSalary = (e) => {
            this.setState({
                salary: e.target.value
            })

        }*/

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.department]: e.target.value,
            [e.target.salary]: e.target.value
        })
    }

    addUser = async (dispatch, e) => {
        e.preventDefault();
        const {name, department, salary} = this.state;
        const newUser = {
            name,
            salary,
            department
        }
        if (!this.validateForm()) {
            this.setState({
                error: true
            })
            return;
        }

        const response = await axios.post("http://localhost:3001/users", newUser);
        dispatch({type: "ADD_USER", payload: response.data});

        // Redirect
        this.props.history.push("/");
    }


    render() {
        const {isVisible, name, department, salary, error} = this.state;
        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className="col-md-12 mb-4">

                            <div className="card" style={isVisible ? {backgroundColor: "#E5E4E2"} : null}>
                                <div onClick={this.changeVisibile} className="card-header">
                                    <h4>Show Form</h4>
                                </div>
                                {
                                    isVisible ?
                                        <div className="card-body">
                                            {
                                                error ?
                                                    <div className="alert alert-danger">
                                                        please check your information!
                                                    </div>
                                                    : null
                                            }
                                            <form onSubmit={this.addUser.bind(this, dispatch)}>
                                                <div className="form-group">
                                                    <label htmlFor="name">
                                                        Name
                                                    </label>
                                                    <input type="text"
                                                           name="name"
                                                           id="id"
                                                           placeholder="Enter Name"
                                                           className="form-control"
                                                           value={name}
                                                           onChange={this.changeInput}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="department">
                                                        Department
                                                    </label>
                                                    <input type="text"
                                                           name="department"
                                                           id="department"
                                                           placeholder="Enter Department"
                                                           className="form-control"
                                                           value={department}
                                                           onChange={this.changeInput}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="salary">
                                                        Salary
                                                    </label>
                                                    <input type="text"
                                                           name="salary"
                                                           id="salary"
                                                           placeholder="Enter Salary"
                                                           className="form-control"
                                                           value={salary}
                                                           onChange={this.changeInput}
                                                    />
                                                </div>

                                                <button className="btn btn-success btn-block">Add User</button>
                                            </form>
                                        </div>
                                        : null
                                }
                            </div>

                        </div>
                    );
                }
            }
        </UserConsumer>

    }

}

export default AddUser;