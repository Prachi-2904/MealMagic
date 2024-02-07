import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet"/>
      {/* <!--Stylesheet--> */}
      <style media="screen"></style>
      <link href="/css/login.css" rel="stylesheet" media="all"/>
      
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" required/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" required/>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
