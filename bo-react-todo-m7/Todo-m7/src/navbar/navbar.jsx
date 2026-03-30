import './Navbar.css';

export function Navbar() {
    return (
        <nav className="navbar">
        <div className="logo">ToDoApp</div>
        <ul className="nav-links">
            <li><a href="#addTodo">Toevoegen</a></li>
            <li><a href="#showTodo">Todos</a></li>
        </ul>
        </nav>
    )
}