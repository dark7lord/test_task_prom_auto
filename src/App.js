import React, { useEffect, useState } from 'react';
import EmployersList from "./components/EmployersList";
import './index.css';

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
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await data.json();
            // добавил перемешивание данных, так как данные с адреса выше одни и те же
            // чтобы было понятно что делается запрос, но каждый раз с другим порядком
            const shuffledUsers = shuffle(users);
            fnSetter(shuffledUsers);

        } catch (e) {
            console.log(e);
        }
    })();
}

function App() {
    const [ employers, setEmployers ] = useState([]);

    useEffect(() => {
        if (employers.length === 0) {
            getDataUsers(setEmployers);
            return;
        }

        const timer = setTimeout(() => {
            getDataUsers(setEmployers)
        }, 5000)

        return () => {
            clearInterval(timer);
        };
    });

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
