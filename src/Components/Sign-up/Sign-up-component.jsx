import React from 'react';
import FormInput from '../Form-input/form-input.component';
import CustomButton from '../Custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './signup.styles.scss';


class SignUp extends React.Component {
        constructor() {
            super();

            this.state = {
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            };
        }

        handleSubmit = async (event) => {
            event.preventDefault();
            const {displayName,email,password,confirmPassword} = this.state;

            if(password !== confirmPassword) {
                alert("passwords don't match");
                return;
            } 

            try{
//this is for creating user
       const{user} = await auth.createUserWithEmailAndPassword(email,password);

//this is to store user in our DB
      await  createUserProfileDocument(user,{displayName});

        
//this will clear our form

this.setState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
});

    } catch(error) {
                console.error(error);
            }

        };

handleChange = event => {
    const {name,value} = event.target;
    this.setState({
        [name] :value
    });
};

        render() {
            const {displayName,email,password,confirmPassword} = this.state;
            return(
                    <div className="sign-up">
                            <h2 className="title">I do not have an account</h2>
                            <span>Signup with your Email and Password</span>

                            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                                <FormInput
                                    type ="text"
                                    name= "displayName"
                                    value = {displayName}
                                    onChange = {this.handleChange}
                                    label = 'Display Name'
                                    required
                                />
                                <FormInput
                                    type ="email"
                                    name= "email"
                                    value = {email}
                                    onChange = {this.handleChange}
                                    label = 'Email'
                                    required
                                />
                                <FormInput
                                    type ="password"
                                    name= "password"
                                    value = {password}
                                    onChange = {this.handleChange}
                                    label = 'Password'
                                    required
                                />
                                <FormInput
                                    type ="password"
                                    name= "confirmPassword"
                                    value = {confirmPassword}
                                    onChange = {this.handleChange}
                                    label = 'Confirm Password'
                                    required
                                />

                                <CustomButton type="submit">SIGN UP</CustomButton>
                            </form>
                    </div>
            );
        }
}



export default SignUp;

