import React from 'react'
import { Pie } from 'react-chartjs-2'
import styles from './PieChart.module.css'

const PieChart = () => {
    const storage = JSON.parse(localStorage.getItem('projectData')).dasbhoardPage.storage
    const data = {
        labels: [
            `Used Storage (${storage.used} GB) `,
            `System Storage (${storage.system} GB)`,
            `Available Storage (${storage.available} GB)`
        ],
        datasets: [{
            data: [storage.used, storage.system, storage.available],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#f00', '#00f', '#ff0'],
        }]
    }
    const legend = {
        labels: {
            fontColor: '#fff',
        }
    }
    return (
        <div className={styles.container}>
            <h3>Storage Information</h3>
            <div>
                <Pie data={data} legend={legend} />
            </div>
        </div>
    )
}

export default PieChart
