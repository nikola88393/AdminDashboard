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
    let text = prompt("Enter the text for the task:")
    if (text === "") {
        alert("Must include text!");
        return;
    }

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.id = ID;

    let cardTitle = document.createElement("h3");
    cardTitle.innerHTML = title;

    let cardContent = document.createElement("div");
    cardContent.innerHTML = text;

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");

    let cardButton1 = document.createElement("button");
    cardButton1.classList.add("remove");
    cardButton1.setAttribute("onclick", `deleteCard('${ID}')`);

    let cardButton2 = document.createElement("button");
    cardButton2.classList.add("done");

    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardContent);
    buttonContainer.appendChild(cardButton1);
    buttonContainer.appendChild(cardButton2);
    cardDiv.appendChild(buttonContainer);

    cards.appendChild(cardDiv);

}

function deleteCard(cardId) {
    let card = document.getElementById(cardId);
    card.remove();
}