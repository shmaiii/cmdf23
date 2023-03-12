import "./login.css";
import logo from '../image/frog-svgrepo-com 6.png'

function Login() {

return (

    <><img src={logo} /><><><h3>Log In</h3><><div>
        <header>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        </header>
        <body>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Enter Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Enter Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                </div>
                <div class="form-group form-check">

                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


        </body>
    </div>
    </></></></>

)


}

export default Login;

