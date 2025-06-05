const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick="welcome()">Log In</button></p>
    <p><button onclick="showRegister()">Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
      let str=`
      <div class="register">
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
     <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick="showLogin()">Already have an account</button></p>
    <button>Register</button>
    </div>
    `
    root.innerHTML = str
}
const welcome=()=>{
    let str=`
    <h1>welcome!!!!</h1>
    ` 
  root.innerHTML = str
    
}