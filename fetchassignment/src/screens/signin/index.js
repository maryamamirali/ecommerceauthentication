import { LogIn } from "../../config/firebaseconfig" 
import { useState } from "react"


export default function SignIn () {

const [email , setEmail] = useState()
const [password , setPassword] = useState()

return <>
<div>
<nav className="nav">
    <a href="/">home</a>
    <a href="#profile">profile</a>
    <a href="#message">message</a>
    <a href="#setting">setting</a> 
<button className="login"><a className="" href="signin">login</a></button>
<button className="signup"><a className="" href="signup">signup</a></button>
</nav>
</div>

<div className="body">
<div className='container'>

    <form className="form">

<h2 className="heading2">Welcome Back!</h2>

<div className="form-group">
    <label className="label" For="email">email address</label> 
<br/>
    <input onChange={(e) => setEmail(e.target.value)} className="input" type="email" id="email" name="email" required/>
</div>


<div className="form-group">
    <label className="label" For="password">password</label> 
<br/>
    <input onChange={(e) => setPassword(e.target.value)} className="input" type="password" name="password" id="password"required />
</div>

<br />

    <button onClick={() => LogIn(email , password)} className="loginbtn">login</button>


<div className="info">
<p>Don't have an account? <a className="additionalinfo" href="signup">signup here</a><a href="reset"></a></p>
</div>
    </form>
</div>
</div>
</>
}