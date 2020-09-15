import React, { Component } from 'react'
import AccountDetails from '../../Components/AccountDetails/AccountDetails'
import styles from './Accounts.module.css'

export default class Accounts extends Component {
    render() {
        return (
            <div>
                <div className={styles.listing}>
                    <h3 className={styles.heading}>List of Accounts</h3>
                    <p>Accounts</p>
                    <select className={styles.dropdown}>
                        <option>Select an account </option>
                        <option>Admin</option>
                        <option>Editor</option>
                        <option>Merchant</option>
                        <option>Customer</option>
                    </select>
                </div>
                <AccountDetails />
            </div>
        )
    }
}
