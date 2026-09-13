let postsContainer =
    document.getElementById("postsContainer");

let loading =
    document.getElementById("loading");

let error =
    document.getElementById("error");


async function getPosts() {

    try {

        let response =
            await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );


        if (!response.ok) {
            throw new Error("Something went wrong");
        }


        let posts =
            await response.json();


        loading.style.display = "none";


        for (let post of posts) {

            let card =
                document.createElement("div");

            card.className = "card";


            card.innerHTML = `
                <p class="id">ID: ${post.id}</p>

                <h2>${post.title}</h2>

                <p>${post.body}</p>
            `;


            postsContainer.appendChild(card);
        }

    } catch (errorMessage) {

        loading.style.display = "none";

        error.textContent =
            "Failed to load posts.";
    }
}


getPosts();