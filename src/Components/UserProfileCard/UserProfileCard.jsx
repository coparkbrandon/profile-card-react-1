import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/pond5.profile.pic2.2023.jpg'

const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className="gradient"></div>
        <div className="profile-down">
            <img src={profile_icon} alt=""/>
            <div className="profile-title">Connoisseur Park</div>
            <div className="profile-description">Connoisseur Park is music production and design by Brandon Mitchell</div>
        </div>
        <div className="profile-button"><a href='mailto:coparkcreative@gmail.com'>Contact Me</a></div>
    </div>

 )
}

export default UserProfileCard
