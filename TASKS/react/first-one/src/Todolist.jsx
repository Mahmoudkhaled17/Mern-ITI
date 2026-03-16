
const todolist = [
    {name: 'Buy groceries', id: crypto.randomUUID()},
    {name: 'Clean the house', id: crypto.randomUUID()},
    {name: 'Finish project', id: crypto.randomUUID()},
    {name: 'Call mom', id: crypto.randomUUID()}
]

export default function Todolist() {
    return (
        <div>
            <h1>My To Do List</h1>
            <ul>
                {todolist.map((item) => (
                     <li key={item.id}>{item.name}</li>
                 ))}
            </ul>
        </div>)
}