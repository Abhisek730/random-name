import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default class AddContact extends Component {
  state={
    name:"",
    email:"",
  };

  add=(e)=>{
    e.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
      alert("all fields are mandatory")
    }else{
      this.props.addContactHandler(this.state)
      this.setState(
        {
          name: "",
          email: ""
        })
         window.location.href = "/"
        
       
    }
    // this.props.history.push('/');
    console.log(this.props)
   
  }
  render() {
    return (
      <div >
          <h2>Add Contact</h2>
          <form onSubmit={this.add}>
  <div className="mb-3 my-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
    <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.email}
    onChange={(e)=>{this.setState({email:e.target.value})}}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>
    )
  }
}
