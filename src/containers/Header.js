
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { loadUser } from '../redux/actions/user'
import styles from './Header.module.scss'
import NewOrder from '../components/NewOrder'
import UserInfoContainer from './UserInfoContainer'


const Header = ({loadUser, user}) => {
    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div className = {styles.mainContainer}>
          <div className={styles.headerContainer}>
            <div className={styles.userFavContainer}>
              <span><FontAwesomeIcon icon={['far', 'star']} /></span>
              <span>{user.first_name} {user.last_name}</span>
            </div>
            <NewOrder />
          </div>
          <div className={styles.userInfoContainer}>
            <UserInfoContainer user={user} />
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