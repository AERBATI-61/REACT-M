import React, {Component} from 'react';
import User3 from "./User3";
import UserConsumer from "../context"

class Users extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    value => {
                        const {users} = value;
                        return (
                            <div>
                                {
                                    users.map(user => {
                                        return (
                                            <User3
                                                key={user.id}
                                                id={user.id}
                                                name={user.name}
                                                department={user.department}
                                                salary={user.salary}
                                            />
                                        )
                                    })
                                }
                            </div>
                        );
                    }
                }
            </UserConsumer>
        )
    }
}


export default Users;


