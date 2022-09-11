function todolist(items) {
    let list = "";
    const todo = items;
    for (let i = 0; i < todo.length; i++) {

        list += `<div class="box">
            
        <p>${todo[i].todo}</p></div> `;
    }
    document.getElementById('todoLIst').innerHTML = list;
}

function search1(event) {
    event.preventDefault();

    const getLocalStorage = JSON.parse(localStorage.getItem("todos"))
    filterData(getLocalStorage)
}

function filterData(data) {
    const searchValue = document.getElementById("myinput").value.toLowerCase();
    console.log(data)
    const filterNewData = data.filter((todo) => {
        return todo.todo.toLowerCase().includes(searchValue)
    })

    console.log(filterNewData)
    todolist(filterNewData)
}

function getData() {
    fetch('https://dummyjson.com/todos')
        .then((responce) => responce.json())
        .then((json) => {

            localStorage.setItem('todos', JSON.stringify(json.todos))
            todolist(json.todos)
        });


}
getData()