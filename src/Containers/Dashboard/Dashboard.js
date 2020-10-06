import React, { Component } from 'react'
import Notification from '../../Components/NotificationList/Notification'
import OrderList from '../../Components/OrderList/OrderList'
import PieChart from '../../Components/PieChart/PieChart'
import styles from './Dashboard.module.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div className={styles.container} >
                <div className={styles.topParts}>
                    <div className={`${styles.halfWid} ${styles.marginRight}`}>
                        <PieChart />
                    </div>
                    <div className={`${styles.halfWid} ${styles.marginLeft}`}>
                        <Notification />
                    </div>
                </div>
                <OrderList />
            </div>
        )
    }
}
