import React, { useState } from 'react';
import EmployersList from "./components/EmployersList";
import './index.css';
import useInterval from "./hooks/useInterval";

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        [ array[currentIndex], array[randomIndex] ] = [ array[randomIndex], array[currentIndex] ];
    }
    return array;
}

const getDataUsers = (fnSetter) => {
    (async () => {
        // console.log('get запрос');
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await data.json();
            fnSetter(shuffle(users));

        } catch (e) {
            console.log(e);
        }
    })();
}

function App() {
    const [ employers, setEmployers ] = useState([]);

    useInterval(() => {
        getDataUsers(setEmployers)
    }, 5000);

    return (
        <div className="App">
            <header className="header">
                <h1 className="header__title">Список сотрудников</h1>
            </header>
            <EmployersList employers={ employers }></EmployersList>
        </div>
    );
}

export default App;
