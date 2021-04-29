import React, { useEffect, useState } from 'react'
import { loadOrders } from '../redux/actions/orders';
import { connect } from 'react-redux'
import Tab from '../components/Tab';
import Orders from './Orders';

const OrderTabs = ({loadOrders, orders, errors}) => {
  const [currentTab, setCurrentTab] = useState('OrdersAAA');
  let ordersTexts;
  if (orders && Object.keys(orders).length > 0) ordersTexts = Object.keys(orders);
  const handleOnClick = tab => {
    setCurrentTab(tab);
  }
  useEffect(() => {
    loadOrders();
  }, []);
  return (
    <div>
    {(orders && Object.keys(orders).length > 0) ? (
      <div>
        {Object.keys(orders).map((_, i) => {
         return (
           <>
            <Tab handleOnclick={() => {handleOnClick(ordersTexts[i])}} tabText={ordersTexts[i]} />
            </>
          )
        })}
        <Orders errors={errors} tab={orders[currentTab]} />
      </div>
    ) : (
      <p>There are no orders on our server</p>
    )}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  loadOrders: () => dispatch(loadOrders()),
})

const mapStateToProps = state => ({
  orders: state.orders,
  errors: state.errors,
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderTabs);
