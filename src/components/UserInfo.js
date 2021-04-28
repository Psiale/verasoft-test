import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getAge from '../helpers'

const UserInfo = ({user}) => (
    <div>
      <FontAwesomeIcon icon={['far', 'user']} />
      <span>{user.gender} {getAge(user.birth_date)}</span>
    </div>
);

export default UserInfo;
