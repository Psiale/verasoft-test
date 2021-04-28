// <Header />
// <UserInfo />
// <OrderTabs />
// <Orders />

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadOrders } from '../redux/actions/orders'
import { loadUser } from '../redux/actions/user'
import { defaultHeaders } from '../api/helper'

const Home = ({loadOrders, loadUser}) => {
    useEffect(() => {
        defaultHeaders()
    });

    return (
        <>
        <button onClick={() => loadOrders()}>Hello from home</button>
        <button onClick={() => loadUser()}> user load</button>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    loadOrders: () => dispatch(loadOrders()),
    loadUser: () => dispatch(loadUser()),
})

export default connect(null, mapDispatchToProps)(Home);