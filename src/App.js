import React, { Component } from 'react'
import Topbar from './Components/Topbar/Topbar'
import './App.css'
import Accounts from './Containers/Accounts/Accounts'

export default class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Topbar />
				<div className="content">
					<Accounts />
				</div>
			</div>
		)
	}
}
