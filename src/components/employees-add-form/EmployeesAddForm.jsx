import s from './EmployeesAddForm.module.css';
import {useState} from "react";

export const EmployeesAddForm = ({addWorker}) => {

    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [errorName, setErrorName] = useState(false);
    const [errorSalary, setErrorSalary] = useState(false);

    const onNameValue = (e) => {
        const value = e.target.value;
        if (value) {
            setName(value)
            setErrorName(false);
        }
    }

    const onSalaryValue = (e) => {
        const value = e.target.value;
        if (value) {
            setSalary(value)
            setErrorSalary(false);
        }
    }

    const onClickAddHandler = (e) => {
        e.preventDefault()
        if(!name || !salary) {
            setErrorName(true);
            setErrorSalary(true);
            return
        }
        addWorker(name, salary);
        setName('')
        setSalary('')
    }

    const errorNameClass = errorName ? s.error : ''
    const errorClassClass = errorSalary ? s.error : ''

    return (
        <div className={s.appAddForm}>
            <h3>Добавьте нового сотрудника</h3>
            <form
                className={`${s.addForm} d-flex`}>
                <input
                    value={name}
                    type="text"
                    className={'form-control new-post-label' + ' ' + errorNameClass}
                    placeholder="Как его зовут?"
                    onChange={onNameValue}
                />
                <input
                    value={salary}
                    type="number"
                    className={'form-control new-post-label'+ ' ' + errorClassClass}
                    placeholder="З/П в $?"
                    onChange={onSalaryValue}
                />
                <button
                    type="submit"
                    className="btn btn-outline-light"
                    onClick={onClickAddHandler}
                >Добавить
                </button>
            </form>
        </div>
    )
}