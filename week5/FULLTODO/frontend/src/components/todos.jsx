export function Todos ({todos}) {
    return <>
    {/* <div>
        <h1>{todos[0].title}</h1>
        <h2>{todos[0].description}</h2>
        <button>{todos[0].completed == true ?"Completed":"Mark as Completed"}</button>
    </div> */}
    <div>
{todos.map(function(todo){
    <h1>{todo.title}</h1>,
    <h2>{todo.description}</h2>,
    <button>{todo.completed == true ?"Completed" : "Mark as Complete" }</button>
})}

    </div>
    </>
}