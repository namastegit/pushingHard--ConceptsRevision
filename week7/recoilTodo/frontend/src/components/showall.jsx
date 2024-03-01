import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { todos } from "../atoms/showingatoms/titleatom";
// Adjust the path

export function ShowallTodos() {
    const [todosState, setTodosState] = useRecoilState(todos);

    useEffect(() => {
        fetch("http://localhost:3000/todos")
            .then((res) => res.json())
            .then((data) => {
                setTodosState(data.todos);
            });
    }, []);

    return (
        <>
            {todosState.map((todo, index) => (
                <Showing key={index} title={todo.title} description={todo.description} />
            ))}
        </>
    );
}
function Showing({ title, description }) {
    return (
        <>
            <h1>{title}</h1>
            <br />
            <h2>{description}</h2>
        </>
    );
}
