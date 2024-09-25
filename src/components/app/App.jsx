import s from './App.module.css';
import {AppInfo} from '../app-info/AppInfo';
import {SearchPanel} from '../search-panel/SearchPanel';
import {AppFilter} from '../app-filter/AppFilter';
import {EmployeesList} from '../employees-list/EmployeesList';
import {EmployeesAddForm} from '../employees-add-form/EmployeesAddForm';
import {v1} from "uuid";
import {useState} from "react";

const data = [
    {id: v1(), name: 'John C.' , salary: 800, increase: true},
    {id: v1(), name: 'Alex M.' ,salary: 3000, increase: false},
    {id: v1(), name: 'Carl W.' ,salary: 1500, increase: false},
    {id: v1(), name: 'Elizabeth P.' ,salary: 2500, increase: true},
]


function App() {
    const [dataList, setDataList] = useState(data);

    const deleteUser = (id) => {
        setDataList(dataList.filter(el => el.id !== id))
    }

    const toggleIncrease = (id, increase) => {
        setDataList(dataList.map(user => user.id === id ? {...user, increase} : user))
    }

    const addWorker = (name, salary) => {
        setDataList([{id: v1(), name ,salary, increase: false}, ...dataList])
    }

    return (
    <div className={s.app}>
        <AppInfo />
        <div className={s.searchPanel}>
            <SearchPanel/>
            <AppFilter/>
        </div>
        <EmployeesList
            data={dataList}
            deleteUser={deleteUser}
            toggleIncrease={toggleIncrease}
        />
        <EmployeesAddForm addWorker={addWorker}/>
    </div>
  );
}

export default App;
