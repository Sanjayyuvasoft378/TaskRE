import React, { Component } from 'react'
import Showdata from './Showdata';
export default class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            data:[],
            email:"",
            password:""
            
        }

        this.Registration_Form = this.Registration_Form.bind(this)
        this.userNameChange = this.userNameChange.bind(this)
        this.EmailChange = this.EmailChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
    }

    userNameChange(event){
        console.log("clicked");
        this.setState({userName:event.target.value})
    }

    EmailChange(event){
        console.log("clicked1");
        this.setState({email:event.target.value})
    }


    passwordChange(event){
        console.log("clicked2");
        this.setState({password:event.target.value})
    }


    Registration_Form(e){
        e.preventDefault();
        console.log("clicked");
        const get_data = {}
        get_data.userName = this.state.userName
        get_data.email = this.state.email
        get_data.password = this.state.password
        const addData = this.state.data
        console.log("data added successfully");
        addData.push(get_data)
        this.setState({data:addData})
    }
    
  render() {
    return (
     
<>
<form >
  <div class="container"></div>
  <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
   

    <label for="user"><b>UserName</b></label><br />
    <input type="text" onChange={this.userNameChange}  required /><br />

    <label for="email"><b>Email</b></label><br />
    <input type="email" onChange={this.EmailChange}  required /><br />

    <label for="psw"><b>Password</b></label><br />
    <input type="password" onChange={this.passwordChange}  required/><br /><br />
{/* 
    <label for="psw-repeat"><b>Repeat Password</b></label><br />
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required /><br /> */}
    
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button onClick={this.Registration_Form}>Register</button>
    
 
  
  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>


<div><br /><br /><br />

<h1>Show User Data</h1>

<table class="table">
          <thead>


<tr>
  <th>User Name</th>
  <th>Email</th>
  <th>Password</th>
  {/* <th>Action</th> */}
</tr>
</thead>
<tbody>

    {this.state.data.map((event,index) =>{
        return(
            <tr key ={index} >
            <Showdata senddata={event} />
            {/* <p>{event.userName}</p> */}
            </tr>
        )
    })}
    </tbody>
</table>
</div>
</>
    )
  }
}
