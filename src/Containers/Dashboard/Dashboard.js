import React, { Component } from 'react'
import OrderList from '../../Components/OrderList/OrderList'
import styles from './Dashboard.module.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div className={styles.container} >
                <OrderList />
            </div>
        )
    }
}
