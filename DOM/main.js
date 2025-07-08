let body = document.body;

let bodyBox = document.createElement("div")
bodyBox.className = "container"

bodyBox.style.width = "100%"
bodyBox.style.height = "100vh"
let bodycontent = document.createElement("div")
bodycontent.innerHTML = `<div id="header">

            <img src="dom.jpg" alt="hello..it rains over here:" />
        </div>
        <div id="navigation">
            <ul id="nav">
                <li><strong>Memo</strong></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Photos</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Clients</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div id="footer">

            <img src="dom.jpg" alt="hello..it rains over here:" />
        </div>`

bodyBox.append(bodycontent);
body.append(bodyBox);

// ============================================================================================

// function that takes date string as a parameter

function DataString(string) {
    let date = new Date(string)

    // array of days , the index 0 start from sunday
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let indexOfDay = date.getDay()
    
    return days[indexOfDay];
}

console.log(DataString("8-13-2020"))