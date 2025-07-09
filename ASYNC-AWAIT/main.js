async function posts(numberOfposts) {
    try {
        let fetchJson = await fetch("https://jsonplaceholder.typicode.com/users/");
        let data = await fetchJson.json();

        let postsInCard = Array.from(data)
        postsInCard.length = numberOfposts;
        
        postsInCard.forEach((post) => {
            let box = document.createElement("div");
            box.className = "box";

            box.innerHTML = `
            <div class="header">
            <span>${post.id}</span>
            </div>
            <div class="title">
            <h2>${post.name}</h2>
            </div>
            <div class="price">
                name: <span>${post.username}</span>
            </div>
            <div class="description">
                <p style="font-size: 12px;">
                    Email: ${post.email}
                </p>
            </div>`

            document.querySelector(".container").append(box)
        })
    } catch {
        console.error("error in data")
    }
}

posts(5)

// ==================================================================

// by promise

// function Posts(numberOfposts) {
//     fetch("https://jsonplaceholder.typicode.com/users/")
//         .then(response => response.json())
//         .then(data => {
//             const PostInCard = Array.from(data);
//             PostInCard.length = numberOfposts;

//             // create the cards

//             PostInCard.forEach((post) => {
//                 let box = document.createElement("div");
//                 box.className = "box";

//                 box.innerHTML = `
//                 <div class="header">
//                 <span>${post.id}</span>
//                 </div>
//                 <div class="title">
//                 <h2>${post.name}</h2>
//                 </div>
//                 <div class="price">
//                     name: <span>${post.username}</span>
//                 </div>
//                 <div class="description">
//                     <p style="font-size: 12px;">
//                         Email: ${post.email}
//                     </p>
//                 </div>`

//                 document.querySelector(".container").append(box)
//             })
//         })
//         .catch(error => {
//             console.error("error in data");
//         });
// }

// Posts(8);