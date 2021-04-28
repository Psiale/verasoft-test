
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { connect } from 'react-redux'
import { loadUser } from '../redux/actions/user'
import styles from './Header.module.scss'
import NewOrder from '../components/NewOrder'


const Header = ({loadUser, user}) => {
    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div className = {styles.mainContainer}>
          <div className={styles.headerContainer}>
            <div className={styles.userFavContainer}>
              <p><FontAwesomeIcon icon={faStar} /></p>
              <p>{user.first_name} {user.last_name}</p>
            </div>
            <div> <NewOrder /></div>
          </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    loadUser: () => dispatch(loadUser()),
})

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);