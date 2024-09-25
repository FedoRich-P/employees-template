import {EmployeesListItem} from "../employees-list-item/EmployeesListItem";

import s from './EmployeesList.module.css';

export const EmployeesList = ({data, deleteUser, toggleIncrease}) => {

    const createdEmployeesList = data.map(el => {
        return <EmployeesListItem key={el.id}  {...el} deleteUser={deleteUser} toggleIncrease={toggleIncrease}/>
    })

    return (
        <ul className={`${s.appList} list-group`}>
            {createdEmployeesList}
        </ul>
    )
}

// name={el.name} salary={el.salary}

// <EmployeesListItem name={'John C.'} salary={800}/>
// <EmployeesListItem name={'Alex M.'} salary={3000}/>
// <EmployeesListItem name={'Carl W.'} salary={5000}/>