const todoInput = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const li = document.createElement("li");
    li.innerText = todoInput.value;
    ul.append(li);
    todoInput.value = ""
});

const allowed = false;

const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if(allowed == true) {
            resolve("some value")
        } else {
            reject("rejected data");
        }
    }, 3000)
});

p.then(function (data) {
    console.log(data)
    console.log("this promise is resolved")
}).catch(function (data) {
    console.log(data)
    console.log("this promise is rejected")
})

const response = fetch("https://jsonplaceholder.typicode.com/posts");

response.then(function (data) {
    return data.json();
}).then(function (posts) {
    const container = document.querySelector(".container");

    console.log(posts)
    for(let post of posts) {
        const div = document.createElement("div");
        div.classList.add("card");
        const h3 = document.createElement("h3");
        h3.innerText = post.title;
        const p = document.createElement("p");
        p.innerText = post.body;
        div.append(h3);
        div.append(p);
        container.append(div)
    }
}).catch(function (err) {
    console.log(err)
})

console.log(p)