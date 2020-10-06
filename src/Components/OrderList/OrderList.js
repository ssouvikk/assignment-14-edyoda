import React from 'react'
import styles from './OrderList.module.css'

const statusLight = (status) => {
    switch (status) {
        case "Moving":
            return <span className={`${styles.moving} ${styles.light}`}></span>
        case "Pending":
            return <span className={`${styles.pending} ${styles.light}`}></span>
        case "Cancelled":
            return <span className={`${styles.cancelled} ${styles.light}`}></span>
        case "Delivered":
            return <span className={`${styles.delivered} ${styles.light}`}></span>
        default:
            console.log("no styling for the status: ", status);
            break;
    }
}

const orderRow = (pos, order) => {
    return (
        <tr key={pos}>
            <td className={styles.bold}># {order.orderNo} </td>
            <td >  {statusLight(order.status)} {order.status} </td>
            <td className={styles.bold}> {order.operators} </td>
            <td className={styles.bold}> {order.location} </td>
            <td className={styles.bold}> {order.distance} KM </td>
            <td > {order.startDate} </td>
            <td> {order.deliveryDate} </td>
        </tr>
    )
}

const OrderList = () => {
    const allOrders = JSON.parse(localStorage.getItem('projectData')).dasbhoardPage.orders
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Orders list</h3>
            <div className={styles.scroll}>
                <table className={`${styles.table}`}>
                    <thead>
                        <tr>
                            <th>Order No</th>
                            <th>Status</th>
                            <th>Operators</th>
                            <th>Location</th>
                            <th>distance</th>
                            <th>start date</th>
                            <th>est delivery date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((order, pos) => orderRow(pos, order))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderList
