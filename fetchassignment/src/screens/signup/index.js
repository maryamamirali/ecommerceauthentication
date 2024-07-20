import { register } from "../../config/firebaseconfig"
import { useState } from "react"

export default function SignUp () {

const [email , setEmail] = useState()
const [password , setPassword] = useState()
const [fullname , setFullname] = useState()

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

<div className="signup-body">
<div className="signup-container">
    <form className="signup-form">

<h2 className="signup-h2">welcome to our service!</h2>

<div className="signup-group">
    <label className="signup-label" htmlFor="full name">full name</label>
    <br />
    <input onChange={(e) => setFullname(e.target.value)} className="signup-input" type="fullname" id="fullname"/>
</div>


<div className="signup-group">
    <label className="signup-label" htmlFor="email address">email address</label>
    <br />
    <input onChange={(e) => setEmail(e.target.value)} className="signup-input" type="email" id="email"  />
</div>


<div className="signup-group">
    <label className="signup-label" htmlFor="password">password</label>
    <br />
    <input onChange={(e) => setPassword(e.target.value)} className="signup-input" type="password" id="password" />
</div>

<br/>

<div className="signup-group">
    <label className="signup-label">
<input className="checkout-input" type="checkbox" name="newsletter"/>Subscribe to our newsletter for updates and promotions
    </label>
</div>


<button onClick={() => register(email , password , fullname)} className="signupbtn">signup</button>
    </form>

<div className="info">
    <p>Already have an account? <a className="additionalinfo" href="signin">Log In Here</a></p>
</div>
</div>
</div>
    </>
}