import React, { Component } from 'react';
import "./userProfile.css";

export default class UserProfile extends Component {
    toggleInfo = (e) => {
        e.target.parentNode.classList.toggle("open");
    };
    render() {
        return (
            <div className = "main_userprofile">
                <div className = "profile_card user_profile_image">
                    <div className = "profile_image">
                        <img src= "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg"></img>
                    </div>
                    <h4>Nursultan Yermagambet</h4>
                    <p>WEB Developer</p>
                </div>
                <div className  = "profile_card">
                    <div className = "card_header" onClick = {this.toggleInfo}>
                        <h4>Information</h4>
                        <i className = "fa fa-angle-down"></i>
                    </div>
                    <div className = "card_content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus eius tempora id consequuntur ducimus necessitatibus totam, cumque eligendi. Libero praesentium consequuntur quia ea.
                    </div>
                </div>
            </div>    
        )
    }
}