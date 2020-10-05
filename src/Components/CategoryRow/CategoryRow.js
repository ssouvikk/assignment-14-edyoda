import React from 'react'
import DeleteIcon from '../DeleteIcon/DeleteIcon'

const CategoryRow = (props) => {

    return (
        <tr key={props.pos}>
            <td>{props.data}</td>
            <td> <DeleteIcon clickToDelete={() => props.clickHandle(props.pos)} /> </td>
        </tr>
    )
}

export default CategoryRow
