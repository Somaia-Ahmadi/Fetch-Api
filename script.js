let loading = document.getElementById("loading");
let error = document.getElementById("Error");
let postcontainer = document.getElementById("postcontainer");

fetch("https://jsonplaceholder.typicode.com/posts");

.then (function(response){

     return response.json();

     .then(function(posts){

        loading.style.display = "none";

        for( let post of posts){
             
             let card = document.createElement("div");

             card.className = "card";

             card.innerHTML = `<p class = "id"> ID:${post.id} </p>
             <h2> ${post.tittle} </h2>
             <p> ${post.body} </p>
             `;
             postcontainer.appendChild(card);

             .catch(function(errormessage){
                loading.style.display ="none";
                error.textContent = "load has faild";
             });

        }
     });
});
