// <Header />
// <UserInfo />
// <OrderTabs />
// <Orders />

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadOrders } from '../redux/actions/orders'
// import { defaultHeaders } from '../api/helper'
// import axios from 'axios'

const Home = ({loadOrders}) => {
    useEffect(() => {
        // defaultHeaders()
        // console.log(axios.defaults)
    });

    return (
        <>
        <button onClick={() => loadOrders()}>Hello from home</button>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    loadOrders: () => dispatch(loadOrders())
})

export default connect(null, mapDispatchToProps)(Home);