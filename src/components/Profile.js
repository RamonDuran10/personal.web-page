import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import "./styles.css";

export const Profile = () => {
   const {user, isAuthenticated, isLoading} = useAuth0();

   if (isLoading) {
       return <div className="isloading">Loading...</div>
   }
   return (
       isAuthenticated && 
       (
       <div className="profile">
           <img src={user.picture} alt={user.name} class="avatar"></img>
        <div className="avatar-info">
        <br/> <br/>
            <p > Great to see you: {user.name}</p>
           </div>  
       </div>
       )
       
   )
}
