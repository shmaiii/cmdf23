import "./login.css";
import logo from '../image/frog-svgrepo-com 6.png'
import {Link} from 'react-router-dom';

function Login() {
function goIndex() {
    window.location.href='http://localhost:3000/';
}
return (
        <div class="float-container-form">
        <div class="float-child1-form"> 
        <img src={logo} alt="logo"/>
        <p class="center">Welcome Back!</p>
        </div>

        <div class="float-child2-form"> 
        <p>Log In</p>
        <br></br>
    <form>
  <div class="form-group" >
    <label for="exampleInputEmail1">Enter Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username " />
  </div>
  <br></br>
  <div class="form-group">
    <label for="exampleInputPassword1">Enter Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password"/>
  </div>
  <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"}}>
  {/* <button type="submit" class="btn btn-primary" onclick="window.location.href=http://localhost:3000/"><Link to='/'>Submit</Link></button> */}
  <a href="http://localhost:3000/" class="btn btn-primary">Login</a>
    </div>
</form>
</div>
</div>

);
}

export default Login;

