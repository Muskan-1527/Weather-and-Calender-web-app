import React,{Component} from 'react';
import fire from '../../config/config';
import './Login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

class Login extends Component{

constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
        email:'',
        password:'',
        clicked:false

    }
}

errorMessage = "";

//checking the login details and error messages... 
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u) =>{ 
        Swal.fire({
            type: 'success',
            text:'Successfully logged in'
        });
    }).catch((error) =>{

        this.errorMessage = error.message
        if(this.errorMessage == "The email address is badly formatted.") {
        Swal.fire({
            type: 'error',
            title:'ERROR',
            text:'Invalid Credentials'
        });
        }
        else if(this.errorMessage == "The password is invalid or the user does not have a password.") {
            Swal.fire({
                type: 'error',
                title:'ERROR',
                text:'Invalid Credentials'
            });
        }
        else if(this.errorMessage == "There is no user record corresponding to this identifier. The user may have been deleted.") {
            Swal.fire({
                type: 'error',
                title:'ERROR',
                text:'User does not exist'
            });
        }
        else {
            Swal.fire({
                type: 'error',
                title:'ERROR',
                text:'Invalid Credentials'
            });
        }
        console.log(error);

    })
}

//signing up of user and error messages...
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u) =>{ 
        Swal.fire({
            type: 'success',
            text:'New account created'
        });
    })
    .catch((error) =>{

        this.errorMessage = error.message
        if(this.errorMessage == "The email address is badly formatted.") {
            Swal.fire({
                type: 'error',
                title:'ERROR',
                text:'Invalid Credentials'
            });
        }
        else if(this.errorMessage == "The password must be 6 characters long or more.") {
            Swal.fire({
                type: 'error',
                title:'ERROR',
                text:'The password should be of atleast 6 characters'
            });
         }

         else if(this.errorMessage == "Password should be at least 6 characters") {
             Swal.fire("The password should be of atleast 6 characters");
             Swal.fire({
                type: 'error',
                title:'ERROR',
                text:'The password should be of atleast 6 characters'
            });
         }

        else if(this.errorMessage == "The email address is already in use by another account.") {
            Swal.fire({
                type: 'error',
                title:'ERROR',
                text:'User already exist'
            });
        }
        else {
            Swal.fire({
                type: 'error',
                title:'ERROR',
                text:'Invalid Credentials'
            });
        }
        console.log(error);

    })
}


authChange = (e) => {
    e.preventDefault();
this.setState(prevState =>{
    return {clicked: !prevState.clicked};
});
}

//value entered by user changes the value in the fields...
 handleChange(e) {
     this.setState({[e.target.name] : e.target.value});
 }
    render(){
        
        return(

            <div>

                <main className="Form">
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="on" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password"/>
                        </div>
                        <button type="submit" onClick={this.login} className="btn btn-primary" disabled={this.state.clicked}>Login</button>
                        <p style={{marginTop:"5%"}}><strong>{this.state.clicked ? "Account already exists??":"Don't have an account??Then create one..." }</strong></p>
                        <button onClick={this.authChange} className="btn btn-danger">{this.state.clicked ? "Go back to login" :"Click Here!!!"}</button>
                        {this.state.clicked ?
                        <button onClick={this.signup} style={{marginLeft:'25px'}} className="btn btn-success">Signup</button>
                        :null}

                </form>
                </div>
                </main>
            </div>
        )
    }
};

export default Login;