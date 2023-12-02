let cardId = 4;
function addCard() {
    let ID = "card" + cardId;
    cardId++;

    let cards = document.getElementById("cards");
    let title = prompt("Enter the title of the task:");
    if (title === "") {
        alert("Must include title!");
        return;
    }
    else if (title === null) {
        return;
    }
    let text = prompt("Enter the text for the task:")
    if (text === "") {
        alert("Must include text!");
        return;
    }
    else if (text === null) {
        return;
    }

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("incomplete");
    cardDiv.id = ID;

    let cardTitle = document.createElement("h3");
    cardTitle.innerHTML = title;

    let cardContent = document.createElement("div");
    cardContent.innerHTML = text;

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");

    let cardButtons = document.createElement("div");
    cardButtons.classList.add("cardButtons");

    let cardButton1 = document.createElement("button");
    cardButton1.classList.add("remove");
    cardButton1.setAttribute("onclick", `deleteCard('${ID}')`);

    let cardButton2 = document.createElement("button");
    cardButton2.classList.add("done");
    cardButton2.setAttribute("onclick", `markDone('${ID}')`);

    let cardButton3 = document.createElement("button");
    cardButton3.classList.add("undone");
    cardButton3.setAttribute("onclick", `markUndone('${ID}')`);

    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardContent);
    cardButtons.appendChild(cardButton1);
    cardButtons.appendChild(cardButton2);
    cardButtons.appendChild(cardButton3);
    buttonContainer.appendChild(cardButtons);
    cardDiv.appendChild(buttonContainer);

    cards.appendChild(cardDiv);

}

function deleteCard(cardId) {
    let card = document.getElementById(cardId);
    card.remove();
}

function markDone(cardId) {
    let card = document.getElementById(cardId);
    card.classList.remove("incomplete");
    card.classList.add("complete");
}

function markUndone(cardId) {
    let card = document.getElementById(cardId);
    card.classList.remove("complete");
    card.classList.add("incomplete");
}