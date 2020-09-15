import React, { Component } from 'react'
import styles from './Topbar.module.css'

export default class Topbar extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <h2 className={styles.logo}>Product Admin</h2>
                <div className={styles.links}>
                    <div className={styles.link}>
                        <i className={`fa fa-tachometer ${styles.icons}`} aria-hidden="true"></i>
                        <p className={styles.linkName}>Dashboard</p>
                    </div>
                    <div className={styles.link}>
                        <i className={`fa fa-shopping-cart ${styles.icons}`} aria-hidden="true"></i>
                        <p className={styles.linkName}>Products</p>
                    </div>
                    <div className={`${styles.link} ${styles.activeLink}`}>
                        <i className={`fa fa-user-o ${styles.icons}`} aria-hidden="true"></i>
                        <p className={styles.linkName}>Accounts</p>
                    </div>
                </div>
                <div className={styles.logout}>Admin, <strong> Logout </strong></div>
            </div>
        )
    }
}
