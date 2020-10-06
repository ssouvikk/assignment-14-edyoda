import React, { Component } from 'react'
import Topbar from './Components/Topbar/Topbar'
import './App.css'
import Login from './Containers/Login/Login'
import Footer from './Components/Footer/Footer'
import Products from './Containers/Products/Products'
import Axios from 'axios'
import AddProduct from './Containers/AddProduct/AddProduct'
import Dashboard from './Containers/Dashboard/Dashboard'
import Accounts from './Containers/Accounts/Accounts'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

export default class App extends Component {
	state = {
		loggedIn: localStorage.getItem('login') === "true",
		projectData: {},
	}

	logUserOut = () => {
		localStorage.removeItem('login')
		localStorage.removeItem('user')
		this.setState({ loggedIn: false })
	}

	handleLogIn = () => {
		this.setState({ loggedIn: localStorage.getItem('login') === "true", })
	}

	delCat = (cId) => {
		const currentProjectData = this.state.projectData
		const newVal = currentProjectData.productsPage.categories.filter((cat, pos) => pos !== cId)
		currentProjectData.productsPage.categories = newVal
		localStorage.setItem('projectData', JSON.stringify(currentProjectData))
		this.setState({ projectData: currentProjectData })
	}

	delProduct = (pId) => {
		const currentProjectData = this.state.projectData
		const newVal = currentProjectData.productsPage.products.filter((product, pos) => pos !== pId)
		currentProjectData.productsPage.products = newVal
		localStorage.setItem('projectData', JSON.stringify(currentProjectData))
		this.setState({ projectData: currentProjectData })
	}


	delMarked = () => {
		const currentProjectData = this.state.projectData
		const newVal = currentProjectData.productsPage.products.filter((product) => product.selectedId !== true)
		currentProjectData.productsPage.products = newVal
		localStorage.setItem('projectData', JSON.stringify(currentProjectData))
		this.setState({ projectData: currentProjectData })
	}

	handleTick = (pos) => {
		const currentProjectData = this.state.projectData
		currentProjectData.productsPage.products[pos]["selectedId"] = !currentProjectData.productsPage.products[pos]["selectedId"]
		this.setState({ projectData: currentProjectData })
	}

	updateProjectData = () => {
		const updatedProjectData = JSON.parse(localStorage.getItem('projectData'))
		this.setState({ projectData: updatedProjectData })
	}

	componentDidMount = () => {
		const prevVal = localStorage.getItem('projectData')
		if (!prevVal) {
			// Axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
			Axios.get('https://5ef9a09ebc5f8f0016c66d82.mockapi.io/ProjectDatas/1')
				.then((response) => {
					localStorage.setItem('projectData', JSON.stringify(response.data.value))
					this.setState({
						projectData: { ...response.data }
					})
				})
				.catch((err) => {
					console.log(err);
				})
		} else {
			this.setState({ projectData: JSON.parse(prevVal) })
		}

	}

	render() {
		return (
			<BrowserRouter >
				<div className="wrapper">
					<Topbar loggedIn={this.state.loggedIn} logUserOut={this.logUserOut} />
					<div className="content">
						<Switch>
							<Route exact path="/" render={() => this.state.loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} />
							<Route exact path="/login" render={() => this.state.loggedIn ? <Redirect to="/" /> : <Login loginHandle={this.handleLogIn} />} />
							<Route exact path="/dashboard" render={() => this.state.loggedIn ? <Dashboard /> : <Redirect to="/" />} />
							<Route exact path="/addProduct" render={() => this.state.loggedIn ? <AddProduct update={this.updateProjectData} /> : <Redirect to="/" />} />
							<Route exact path="/products" render={() => this.state.loggedIn ? <Products delCat={this.delCat} delMarked={this.delMarked} handleTick={this.handleTick} delProduct={this.delProduct} data={this.state.projectData.productsPage} updateProjectData={this.updateProjectData} /> : <Redirect to="/" />} />
							<Route exact path="/account" render={() => this.state.loggedIn ? <Accounts /> : <Redirect to="/" />} />
						</Switch>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}
