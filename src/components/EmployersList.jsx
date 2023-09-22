import React from 'react';
import Employer from "./Employer";

const EmployersList = ({ employers }) => {
    if (!employers) return <p className="user__list">...</p>

    const listEmployers = employers && employers.map((employer) => {
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