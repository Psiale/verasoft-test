import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getAge from '../helpers'
import { faMobileAlt, faHome, faAt } from '@fortawesome/free-solid-svg-icons'
import styles from './UserInfo.module.scss'

const UserInfo = ({user}) => (
    <>
    <div className={styles.mainUserContainer}>
        <FontAwesomeIcon icon={['far', 'user']} />
        <span>{user.gender} - {getAge(user.birth_date)}</span>
    </div>
    <div className={styles.infoContainer}>
          <div>
            <FontAwesomeIcon icon={['far','user']} />
            <span>#{user.id}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faMobileAlt} />
            <span>{user.mobile_phone}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={['far','building']} />
            <span>{user.work_phone}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faHome} />
            <span>{user.home_phone}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faAt} />
            <span>{user.email}</span>
          </div>
        </div>
    </>
);

export default UserInfo;