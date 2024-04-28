import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent ComponentDidMount");
    }
    render(){
        console.log("Parent render")
        return (
            <div >
                  <h1 c >About</h1>
                  <div>
                    loggedIn User: <UserContext.Consumer>{({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}</UserContext.Consumer>
                  </div>
                  <h3>This is a React Learning Series</h3>
                  <UserClass name={"NAMASTE"} location={"India"}/>
            </div>
            
        )
    }
}


// const About = () => {
//     // return (
//     //     <div>
//     //         <h1>About</h1>
//     //         <h3>This is a React Learning Series</h3>
//     //         <UserClass name={"NAMASTE"} location={"India"}/>
//     //     </div>
//     // )
// };

export default About;