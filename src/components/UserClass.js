import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Userinfo: {
                name:"Dummy",
                location: "default",
            }
        };
    }
     async componentDidMount(){
      const data = await fetch("https://api.github.com/users/jatin1004");
      const json = await data.json();
      console.log(json);
      this.setState({
        Userinfo:json,
      })
    }
   
    render(){
     //   const {name, location} = this.props;
        const {name, location} = this.state.Userinfo;
        return (
            <div className="usercard">        
            <h1>Name: {name}</h1>
            <h3>Location: {location}</h3>
            <h3>Contact: xyzabc@gmail.com</h3>
        </div>
        )
    }
};

export default UserClass;