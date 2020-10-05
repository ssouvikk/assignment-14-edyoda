import React, { Component } from 'react'
import Navlink from '../Navlink/Navlink'
import styles from './Topbar.module.css'

export default class Topbar extends Component {
    state = {
        activePage: "/" + window.location.href.split('/').pop()
    }

    handlePageChange = (addr) => {
        this.setState({ activePage: addr })
    }

    getUserType = () => {
        const userData = JSON.parse(localStorage.getItem('user'))
        return userData.type
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <h2 className={styles.logo}>Product Admin</h2>
                <div className={styles.links}>
                    <Navlink handlePageChange={this.handlePageChange} activePage={this.state.activePage} to="/dashboard" iconClasses={`fa fa-tachometer`} label="Dashboard" />
                    <Navlink handlePageChange={this.handlePageChange} activePage={this.state.activePage} to="/products" iconClasses={`fa fa-shopping-cart`} label="Products" />
                    <Navlink handlePageChange={this.handlePageChange} activePage={this.state.activePage} to="/account" iconClasses={`fa fa-user-o`} label="Accounts" />
                </div>
                {this.props.loggedIn ? <div onClick={this.props.logUserOut} className={styles.logout}> {this.getUserType()}, <strong> Logout </strong></div> : ''}
            </div>
        )
    }
}
