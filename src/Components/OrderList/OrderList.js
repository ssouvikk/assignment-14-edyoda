import React from 'react'
import styles from './OrderList.module.css'

const orderRow = (pos, order) => {
    return (
        <tr key={pos}>
            <td className={styles.bold}># {order.orderNo} </td>
            <td >
                <span className={`${styles[order.status.toLowerCase()]} ${styles.light}`}></span>
                {order.status}
            </td>
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
