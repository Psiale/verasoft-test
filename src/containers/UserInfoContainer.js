import React from 'react'
import UserInfo from '../components/UserInfo';
//User Info component
// CommunicationActivities

const UserInfoContainer = ({user}) => (
    <>
    <UserInfo user={user} />
    </>
    // <UserInfoComponent user={user} />
    // <CommunicationActivites user={user} />
);

export default UserInfoContainer;
