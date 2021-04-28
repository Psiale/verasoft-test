// <Header />
// <UserInfo />
// <OrderTabs />
// <Orders />

import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { loadOrders } from '../redux/actions/orders'
import { defaultHeaders } from '../api/helper'
import Header from './Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(far)


const Home = ({loadOrders}) => {
    useEffect(() => {
        defaultHeaders()
    });

    return (
        <>
        <button onClick={() => loadOrders()}>Hello from home</button>
        <Header/>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    loadOrders: () => dispatch(loadOrders()),
})

export default connect(null, mapDispatchToProps)(Home);