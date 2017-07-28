import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

class Navbar extends React.Component {

  render () {

    const {handleClick, isLoggedIn} = this.props

    return (
			<nav className="navbar navbar-default">
        <div className="container">
					<div className="navbar-left">
						<Link to="/home"><h4>HOME</h4></Link>
						<Link to="/products"><h4>Products</h4></Link>
						{ isLoggedIn ? <Link to="/orders"><h4>Manage Cart</h4></Link> : null }
					</div>
					{
						isLoggedIn ?
							<div className="navbar-right">
								{/* The navbar will show these links after you log in */}
								<Link to="/account"><h4>Account</h4></Link>
								<a href="#" onClick={handleClick}><h4>Logout</h4></a>
							</div> :
							<div className="navbar-right">
								{/* The navbar will show these links before you log in */}
								<Link to="/login"><h4>Login</h4></Link>
								<Link to="/signup"><h4>Sign Up</h4></Link>
							</div>
					}
				</div>
			</nav>
    )
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
