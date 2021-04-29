import React from 'react'
import styles from './NewOrder.module.scss'

const NewOrder = ({handleOnClick}) => (
    <div className={styles.mainContainer}>
    <button onClick={handleOnClick}> New Order </button>
    </div>
)

export default NewOrder;
