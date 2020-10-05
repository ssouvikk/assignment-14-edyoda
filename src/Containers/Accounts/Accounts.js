import React, { Component } from 'react'
import AccountDetails from '../../Components/AccountDetails/AccountDetails'
import FormDropDown from '../../Components/FormDropDown/FormDropDown'
import styles from './Accounts.module.css'

export default class Accounts extends Component {
    state = {
        userType: JSON.parse(localStorage.getItem('user')).type,
        userData: JSON.parse(localStorage.getItem('user')).data,
    }

    renderAgain = () => {
        this.setState({
            userData: JSON.parse(localStorage.getItem('user')).data
        })
    }

    capitalize = (inp) => inp[0].toUpperCase() + inp.slice(1)

    handleChange = (e) => {
        const selectedUserData = JSON.parse(localStorage.getItem('projectData')).accountsPage[this.capitalize(e.target.value)]
        this.setState({ userData: selectedUserData, userType: e.target.value })
    }

    render() {
        const dropDownOptions = ['admin', 'editor', 'merchant', 'customer']
        return (
            <div>
                <div className={styles.listing}>
                    <h3 className={styles.heading}>List of Accounts</h3>
                    <FormDropDown
                        handleChange={this.handleChange}
                        value={this.state.userType}
                        label="Accounts"
                        data={dropDownOptions}
                    />
                </div>
                <AccountDetails
                    renderAgain={this.renderAgain}
                    data={this.state.userData}
                    userType={this.state.userType}
                />
            </div>
        )
    }
}
