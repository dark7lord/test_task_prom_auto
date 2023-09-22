import React from 'react';
import IconEmail from "../icons/IconEmail";
import IconWebsite from "../icons/IconWebsite";
import IconPhone from "../icons/IconPhone";

const Employer = ({ name, username, email, phone, website }) => {
    const initials = name
        .split(' ')
        .slice(0, 2)
        .map(str => str[0].toUpperCase())
        .join('');

    return <div className="user">
        <h2 className="user__avatar">{ initials }</h2>
        <h3 className="user__name">{ name }</h3>
        <h4 className="user__username">{ username }</h4>
        <ul className="user__contacts">
            <li><a href={ "mailto:" + email } className="user__link user__link--icon-email">
                <IconEmail/> email: { email }
            </a></li>
            <li><a href={ "http://" + website } className="user__link user__link--icon-site">
                <IconWebsite/> website: { website }
            </a></li>
            <li><a href={ "telto:" + phone } className="user__link user__link--icon-phone">
                <IconPhone/> phone: { phone }
            </a></li>
        </ul>
    </div>
}

export default Employer
