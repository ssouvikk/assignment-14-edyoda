import React from 'react'
import styles from './Notification.module.css'

const singleNoti = (noti, pos) => {
    return (
        <div className={styles.notiBox} key={pos}>
            <img className={styles.notiAvatar} src={noti.pic} alt="user of notification" />
            <div className={styles.info}>
                <p className={styles.msg}>{noti.message}</p>
                <p className={styles.time}>{noti.time} ago.</p>
            </div>
        </div>
    )
}

const Notification = () => {
    const notifications = JSON.parse(localStorage.getItem('projectData')).dasbhoardPage.notifications
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Notification list</h3>
            <div className={styles.scroll}>
                {notifications.map((noti, pos) => singleNoti(noti, pos))}
            </div>
        </div>
    )
}

export default Notification
