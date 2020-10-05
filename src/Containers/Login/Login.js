import React, { Component } from 'react'
import Button from '../../Components/Button/Button'
import FormInput from '../../Components/FormInput/FormInput'
import styles from './Login.module.css'

export default class Login extends Component {
    state = {
        loggedIn: localStorage.getItem('login') === "true",
        userName: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = JSON.parse(localStorage.getItem('projectData'))
        const allUsers = data.accountsPage
        for (const key in allUsers) {
            if (allUsers[key].email === this.state.userName && allUsers[key].password === this.state.password) {
                localStorage.setItem('login', true)
                const userData = {
                    type: key,
                    data: allUsers[key]
                }
                localStorage.setItem('user', JSON.stringify(userData))
                this.props.loginHandle()
            }
        }
    }

    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    render() {
        return (
            <div className={styles.wrapper}>
                <h3 className={styles.header}>Welcome to dashboard, Login</h3>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <FormInput handleChange={this.handleChange} value={this.state.userName} label="Username" name="userName" />
                    <FormInput handleChange={this.handleChange} value={this.state.password} label="Password" name="password" type="password" />
                    <Button label="login" />
                </form>
            </div>
        )
    }
}
