// styles
import React, { Component } from 'react'
import logo from '../../assets/teamin_logo.png'
import { MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    state = {clicked: false}
    handleClick = ()=> {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavBarItems">
                <h1 className="navbar-logo"><img src= {logo} alt='no logo'></img></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}>
                     </i>
                
                </div>
 
                <ul className = { this.state.clicked ? 'nav-menu active' : 'nav-menu'
                }>
                    {MenuItems.map((item, index) => {
                        return (


                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}



                                </a>
                            </li>
                        )
                    })}
                </ul>



            </nav >

        )
    }
}

export default Navbar