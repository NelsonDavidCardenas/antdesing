import Person from "./Person";
import React from "react";
interface TodoList {
    person: Person;
}

const list: React.FC<TodoList> = ({ person }) => {
    return (
        <div style={person.theme}>
            <h1>{person.name}&apos;s Todos</h1>
            <img className="avatar" src="https://i.imgur.com/7vQDOfPs.jpg" />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
};

export default list;
