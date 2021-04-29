import React from 'react'
import UserInfo from '../components/UserInfo';
import CommunicationActivites from './CommunicationActivities';
import styles from './UserInfoContainer.module.scss'
//User Info component
// CommunicationActivities

const UserInfoContainer = ({user}) => (
    <>
    <div className={styles.UserInfoContainer}>
        <UserInfo user={user} />
    </div>
    <div className={styles.CommunicationActivites}>
        <CommunicationActivites user={user} />
    </div>
    </>
);

export default UserInfoContainer;
