import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getAge from '../helpers'
import { faMobileAlt, faHome, faAt } from '@fortawesome/free-solid-svg-icons'

const UserInfo = ({user}) => (
    <div>
    <div>
        <FontAwesomeIcon icon={['far', 'user']} />
        <span>{user.gender} {getAge(user.birth_date)}</span>
    </div>
    <div>
        <div>
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
    </div>
    </div>
);

export default UserInfo;