import React from "react";
import axios from 'axios';


class Users extends React.Component {
  constructor(props) {
   super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      this.props.setUsers(response.data.items)
    });
   
  }
    
render(){
    return (
        <div style={{ paddingTop: "70px" , paddingLeft: "5%" }}>
         {this.props.users.map((u) => (
           <div key={u.id}>
             <span>
               <div>
                 <img src={u.photos.small != null ? u.photos.small : "images/user.svg.png"} alt="user" />
               </div>
               <div>
                   {u.followed ?  <button onClick={ () => this.props.unfollow(u.id) }>UnFollow</button> : 
                    <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
               </div>
             </span>
             <span>
               <span>
                 <div>{u.name}</div>
                 <div>{u.status}</div>
               </span>
               <span>
                 <div>{"u.location.county"}</div>
                 <div>{"u.location.city"}</div>
               </span>
             </span>
           </div>
         ))}
       </div>
     );
}
}

export default Users;