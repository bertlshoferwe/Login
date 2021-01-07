import React, { useState } from 'react'

function LoginForm({ Login, Error }) {


  const [ details, setDetails] = useState({ name: '', email: '', password: '' })

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
console.log(Error)
  }

  return (
   <form onSubmit={ submitHandler }>
     <div className='form-inner'>
       <h2>Login</h2>
       {(Error != "") ? ( <div className='error'>{Error}</div>) : '' }

       <div class="form-group">
         <label htmlFor="name">Name:</label>
         <input type="text" name="name" id="name" onChange={ e => setDetails({ ...details, name: e.target.value})} value={ details.name }  />
       </div>

       <div class="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" onChange={ e => setDetails({ ...details, email: e.target.value})} value={ details.email } />
       </div>

      <div class="form-group">
        <label htmlFor="passord">Password:</label>
        <input type="password" name="password" id="password" onChange={ e => setDetails({ ...details, password: e.target.value})} value={ details.password }/>
      </div>
      <input type="submit" value="Login" />
     </div>
   </form>
  )
}

export default LoginForm
