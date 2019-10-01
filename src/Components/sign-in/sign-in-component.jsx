import React from 'react';
import FormInput from '../Form-input/form-input.component';
import CustomButton from '../Custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in-style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password:''

        })
    }

    handleChange = event => {
        const {value, name}  = event.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">SignIn with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange}
                            label = "Email"
                            name="email" 
                            type="email" 
                            value= {this.state.email} required />
                    <FormInput 
                            handleChange={this.handleChange}
                            label = "Password" 
                            name="password" type="password" 
                            value= {this.state.password} required />
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
                </div>
                </form>
            </div>
        )
    }
}



export default SignIn;