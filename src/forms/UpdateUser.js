import React, {Component} from 'react';
import axios from "axios";
import UserConsumer from "../context";


class UpdateUser extends Component {

    state = {
        name: "",
        department: "",
        salary: "",
        error: false

    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.department]: e.target.value,
            [e.target.salary]: e.target.value
        })
    }

    componentDidMount = async () => {
        const {id} = this.props.match.params;
        const response = await axios.get(`http://localhost:3001/users/${id}`)
        const {name, department, salary} = response.data

        this.setState({
            name,
            department,
            salary
        })
    }

    validateForm = () => {
        const {name, department, salary} = this.state;
        if (name === "" || salary === "" || department === "") {
            return false
        }
        return true;
    }

    UpdateUser = async (dispatch, e) => {
        e.preventDefault();
        //Update User

        const {name, department, salary} = this.state;
        const {id} = this.props.match.params;
        const updatedUser = {
            name: name,
            department: department,
            salary: salary
        };

        if (!this.validateForm()) {
            this.setState({
                error: true
            })
            return;
        }

        const response = await axios.put(`http://localhost:3001/users/${id}`, updatedUser)
        dispatch({type: "UPDATE_USER", payload: response.data});
        // Redirect
        this.props.history.push("/");
    }


    render() {
        const {name, department, salary, error} = this.state;
        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className="col-md-12 mb-4">

                            <div className="card">
                                <div onClick={this.changeVisibile} className="card-header">
                                    <h4>Show Form</h4>
                                </div>


                                <div className="card-body">
                                    {
                                        error ?
                                            <div className="alert alert-danger">
                                                please check your information!
                                            </div>
                                            : null
                                    }

                                    <form onSubmit={this.UpdateUser.bind(this, dispatch)}>
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

                                        <button className="btn btn-success btn-block">Update User</button>
                                    </form>
                                </div>


                            </div>

                        </div>
                    );
                }
            }
        </UserConsumer>

    }

}

export default UpdateUser;