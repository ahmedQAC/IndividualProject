import React, { Component } from 'react';
import axios from 'axios';
import Text from './Text.js';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: " ",
            password: " ",
            confirmPassword: " ",
            ingredients: [],
            message: "",
            validateUser: JSON.parse(sessionStorage.getItem("User"))

        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    addUser = () => {
        if (this.state.username === " " || this.state.password === " " || this.state.confirmPassword === " ") {
            this.setState({
                message: "Please fill in the empty fields"
            });
        }
        else if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                message: "Please make sure that the passwords match"
            });
        }
        else {
            //const LOCALHOST = 'http://localhost';
            const AZURE_IP_ADDRESS = 'recipe.uksouth.cloudapp.azure.com';
            axios({
                method: 'post',
                url: AZURE_IP_ADDRESS + ':8080/Ingredient/api/user/createUser',
                data: {
                    username: this.state.username,
                    password: this.state.password,
                    ingredients: this.state.ingredients
                }
            }).then(response => {
                // console.log(response.data);
                this.setState({
                    message: response.data.message
                });
            }).catch(function (error) {
                console.log(error);
                // this.props.history.push("/Login");
            });

        }
    }
    render() {
        if (this.state.validateUser === null) {
            return (
                <div>
                    <div>
                        <ul>
                            <li><a href="/Home">Home</a></li>
                            <li className="loginSignup"><a href="/Login">Login</a></li>
                            <li className="loginSignup"><a className="active" href="/Signup">Signup</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Signup</h5>
                        <form>
                            <label>
                                <br /> <input type="text" id="username" placeholder="Enter username" onChange={this.handleInput} />
                                <br /> <input type="password" id="password" placeholder="Enter password" onChange={this.handleInput} />
                                <br /> <input type="password" id="confirmPassword" placeholder="Confirm password" onChange={this.handleInput} />
                                <br /> <button type="button" onClick={this.addUser}>Create user</button>
                            </label>
                        </form>
                    </div>
                    <div>
                        <h5><Text text={this.state.message} /></h5>
                    </div>
                </div>
            );
        }
        return (
            <div>
                {this.props.history.push("/Home")}
            </div>
        );
    }
}
export default Signup;