export async function register() {
    const username = document.querySelector("#todo-username-reg").value;
    const password = document.querySelector("#todo-password-reg").value;

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    }
        const response = await fetch('http://localhost:8080/api/register.php', options);
    if(response.ok != true){
        throw new Error(response.status);
    }
    const data = await response.text();

    console.log(data);
}