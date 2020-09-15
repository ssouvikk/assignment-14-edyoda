import React, { Component } from 'react'
import styles from './AccountDetails.module.css'

export default class AccountDetails extends Component {
    render() {
        return (
            <div className={styles.wrapper}>

                <div className={styles.avatarSection}>
                    <h3 className={styles.m0}>Change Avatar</h3>
                    <img className={styles.avatarImg} src={`https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png`} alt={"avatar"} />
                    <button className={styles.btn}>Upload new photo</button>
                </div>

                <div className={styles.accountSettings}>
                    <h3 className={styles.accHeading}>Account Settings</h3>
                    <form className={styles.Form}>
                        <label className={styles.Label}>Account Name <input className={styles.InputField} name="name" /></label>
                        <label className={styles.Label}>Account Email <input className={styles.InputField} name="email" type="email" /></label>
                        <label className={styles.Label}>Password <input className={styles.InputField} name="password" type="password" /></label>
                        <label className={styles.Label}>Re-enter Password <input className={styles.InputField} name="rePassword" type="password" /></label>
                        <label className={styles.Label}>Phone <input className={styles.InputField} name="phone" /></label>
                        <button className={`${styles.btn} ${styles.Label} ${styles.formBtn}`}>Update Your Profile</button>
                    </form>
                    <button className={`${styles.btn} ${styles.delBtn}`}>Delete your account </button>
                </div>
            </div>
        )
    }
}
