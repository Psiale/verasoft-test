import React from 'react'

const Tab = ({handleOnclick, tabText}) => (
    <>
    <button onClick={handleOnclick}>{tabText}</button>
    </>
)

export default Tab;