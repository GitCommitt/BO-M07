import './Navbar.css';

export function Navbar() {
    return (
        <nav class="navbar">
        <div class="logo">ToDoApp</div>
        <ul class="nav-links">
            <li><a href="#addTodo">Toevoegen</a></li>
            <li><a href="#showTodo">Todos</a></li>
        </ul>
        </nav>
    )
}