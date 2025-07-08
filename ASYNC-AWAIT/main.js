async function products(numberOfProducts) {
    try {
        let fetchJson = await fetch("./main.json");
        let data = await fetchJson.json();

        let productsInCard = Array.from(data)
        productsInCard.length = numberOfProducts;
        
        productsInCard.forEach((product) => {
            console.log(product)
            let box = document.createElement("div");
            box.className = "box";

            box.innerHTML = `<div class="title">
            <h2>${product.title}</h2>
            </div>
            <div class="price">
                <span>$${product.price}</span>
            </div>
            <div class="description">
                <p style="font-size: 12px;">
                    ${product.description}
                </p>
            </div>`

            document.querySelector(".container").append(box)
        })
    } catch {
        console.error("error in data")
    }
}

products(5)

// ==================================================================

// by promise

// function products(numberOfProducts) {
//     fetch("./main.json")
//         .then(response => response.json())
//         .then(data => {
//             const productsInCard = Array.from(data);
//             productsInCard.length = numberOfProducts;

//             // create the cards

//             productsInCard.forEach((product) => {
//                 console.log(product)
//                 let box = document.createElement("div");
//                 box.className = "box";

//                 box.innerHTML = `<div class="title">
//                 <h2>${product.title}</h2>
//                 </div>
//                 <div class="price">
//                     <span>$${product.price}</span>
//                 </div>
//                 <div class="description">
//                     <p style="font-size: 12px;">
//                         ${product.description}
//                     </p>
//                 </div>`

//                 document.querySelector(".container").append(box)
//             })
//         })
//         .catch(error => {
//             console.error("error in data");
//         });
// }

// products(5);