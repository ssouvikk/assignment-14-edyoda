import React from 'react'
import DeleteIcon from '../DeleteIcon/DeleteIcon'
import styles from './ProductRow.module.css'

const ProductRow = (props) => {
    return (
        <tr className={styles.wrapper}>
            <td onClick={() => props.handleTick(props.pos)}>
                {props.data.selectedId ? <i className={`fa fa-check-circle ${styles.icons}`} aria-hidden="true"></i> : <span className={`${styles.radio}`}> </span>}
            </td>
            <td> {props.data.name} </td>
            <td> {props.data.unitSold} </td>
            <td> {props.data.stock} </td>
            <td> {props.data.expireDate} </td>
            <td> <DeleteIcon clickToDelete={() => props.clickHandle(props.pos)} /> </td>
        </tr>
    )
}

export default ProductRow
