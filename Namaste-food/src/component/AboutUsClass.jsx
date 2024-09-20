import axios from "axios";
import React from "react";
class AboutUsClass extends React.Component{
    constructor(props){
        super(props) // so that it can be accessed anywhere
        this.state = {
            name: "",
            userId: "",
            avatarURL : "",
        }
    }

    async componentDidMount(){
        const res = await axios.get("https://api.github.com/users/prince981620")
        this.setState({
            name:res.data.name,
            userId: res.data.login,
            avatarURL : res.data.avatar_url,
        })
        // console.log(res.data);
        // consol.log("child component mounted")
    }
    
    render(){
        const {contact} = this.props;
        const {name,userId,avatarURL} = this.state;
        return (
            <div className="border border-black m-2 p-5">
                <img alt="avatar" className="mb-4" src={avatarURL}/>
                <div>Name : {name}</div>
                <div> User Id : {userId}</div>
                <div>Contact : {contact}</div>
            </div>
        );
    }
}

export default AboutUsClass;