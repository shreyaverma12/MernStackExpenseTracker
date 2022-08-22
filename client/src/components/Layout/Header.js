import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { message } from 'antd'
import '../../index.css'
const Header = () => {
  const [loginUser, setLoginUser] = useState('')
  const navigate = useNavigate()
  //we are using this as we need data from the local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setLoginUser(user)
    }
  }, [])

  // deleting the user from localstorage on logout and navigating back to login page
  const logoutHandler = () => {
    localStorage.removeItem('user')
    message.success('Thank you! Logged out Successfully ')
    navigate('/login')

  }
  return (
    <>
    <div className='navbar-color'>
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">Expense Management</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link active">Hi, {loginUser && loginUser.name}</p>

              </li>
              <li className="nav-item">
                <button className="btn btn-primary" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>


    </>
  )
}

export default Header
