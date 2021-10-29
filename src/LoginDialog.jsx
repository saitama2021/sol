import React from 'react';

let username, password = "none";

let getUsername = (event) => {
  console.log("event : ", event.target.value);
  username = event.target.value;
}

let getPassword = (event) => {
  console.log("event : ", event.target.value);
  password = event.target.value;
}

let login = () => {
    if (username == "Admin") {
        console.log('hlo sir ' + username);
        username = "success";
        
    }else {
        console.log('Invalid User');
         username = "failed";
         <h1>kdsjfkljsd = {username}</h1>
    }
}



function LoginDialog() {
return (
        <>
    <div id="dialogBackground">
        <h1 id="logintxt">Login Form </h1>
       
        <h2 id="logintxt">User Name</h2>
        <input  type="text" onChange={getUsername}></input>
        
        <h2 id="logintxt">Password</h2>
        <input type="text" onChange={getPassword}></input>
        <div>
        <button onClick={login}>Log In</button>
        
        

        </div>
    </div>
    </>
    )
}

export default LoginDialog;