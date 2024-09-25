import s from './EmployeesListItem.module.css';
import {useState} from "react";

export const EmployeesListItem = ({id, name, salary, increase, deleteUser, toggleIncrease}) => {

    const [activeStar, setActiveStar] = useState(false);

    const onIncrease = () => {
        toggleIncrease(id, !increase)
    }

    const onActivateStar = () => {
        setActiveStar(!activeStar)
    }

   const onClickDeleteHandler = () => {
       deleteUser(id)
    }

    const className = `${s.listGroupItem} ${increase ? s.increase : ''} ${activeStar ? 'like' : ''} d-flex justify-content-between`

    return (
        <li className={className}>
            <span
                className="list-group-item-label"
                onClick={onActivateStar}
            >{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + ' ' + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className={`${s.btnCookie} btn-sm`}
                        onClick={onIncrease}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className={`${s.btnTrash} btn-sm`}
                        onClick={onClickDeleteHandler}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
