import React from 'react'
import UserInfo from '../components/UserInfo';
import CommunicationActivites from './CommunicationActivities';
//User Info component
// CommunicationActivities

const UserInfoContainer = ({user}) => (
    <>
    <UserInfo user={user} />
    <CommunicationActivites user={user} />
    </>
);

export default UserInfoContainer;
