import React from 'react';
import Employer from "./Employer";
import IconSpinner from "../icons/IconSpinner";

const EmployersList = ({ employers }) => {
    if (employers.length === 0) {
        return (
            <div className="user__loading">
                <IconSpinner/>
            </div>
        )
    }

    const listEmployers = employers.map((employer) => {
        return (
            <li key={ employer.id }>
                <Employer { ...employer } key={ employer.id }/>
            </li>
        )
    });

    return (<ul className="user__list">
        { listEmployers }
    </ul>)
}

export default EmployersList