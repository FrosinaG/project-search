fetch("https://dummyjson.com/posts/search?q=love")
    .then((responce) => responce.json())
    .then(data => random(data.posts));
var list = "";

function random(items) {
    console.log(items);
    for (var i = 0; i < items.length; i++) {
        list += `<a href="index.html?postId=${items[i].id}">
        ${items[i].title}</a>`
    }
    document.getElementById("").innerHTML = list;
}

function searchlist(e) {
    e.preventDEfault();
    const searchWord = document.getElementById("myinput").value;
    fetch(`https://dummyjson.com/posts/search?q=${searchWord}`)
        .then((responce) => responce.json())
        .then(data => random(data.posts));
}