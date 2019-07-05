import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import "./menu.css"

class Menu extends Component {
	render() {
		return (
			<div className="rw-page-menu">
				<NavLink activeClassName="active" exact to="/">
					Home
				</NavLink>
				<NavLink activeClassName="active" to="/page1">
					Page 1
				</NavLink>
				<NavLink activeClassName="active" to="/page2">
					Page 2
				</NavLink>
				<a href="">
					<div className="menu-label">Test</div>
					<div className="sub-menu">
						<ul>
							<li>t1</li>
							<li>t2</li>
							<li>t3</li>
							<li>t4</li>
							<li>t5</li>
						</ul>
					</div>
				</a>
			</div>
		)
	}
}

export default Menu
