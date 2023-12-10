// Number is set to 4 because there are 3 exapmple cards
let cardId = 4;

function addCard() {
    let form = document.getElementById("cardForm");
    form.style.display = "flex";
}

function setCardInfo() {
    let ID = "card" + cardId;
    cardId++;

    let cards = document.getElementById("cards");
    let title = document.getElementById("title").value;
    let text = document.getElementById("content").value;
    let date = document.getElementById("date").value;

    //for future improvement
    if (title == "" || text == "" || date == "") {
        alert("User must fill every field!");
        return;
    }

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("incomplete");
    cardDiv.id = ID;

    let cardTitle = document.createElement("h3");
    cardTitle.innerHTML = title;

    let cardDueDate = document.createElement("p");
    cardDueDate.innerHTML = `Due date: ${date}`;

    let cardStatus = document.createElement("p");
    cardStatus.classList.add("status");
    cardStatus.innerHTML = "Status: Awaiting completion ❌";
    cardStatus.style.color = "red";

    let cardContent = document.createElement("p");
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

    let cardButton4 = document.createElement("button");
    cardButton4.classList.add("edit");
    cardButton4.setAttribute("onclick", `editCard('${ID}')`);

    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardDueDate);
    cardDiv.appendChild(cardStatus);
    cardDiv.appendChild(cardContent);
    cardButtons.appendChild(cardButton1);
    cardButtons.appendChild(cardButton2);
    cardButtons.appendChild(cardButton3);
    cardButtons.appendChild(cardButton4);
    buttonContainer.appendChild(cardButtons);
    cardDiv.appendChild(buttonContainer);

    cards.appendChild(cardDiv);

    document.getElementById("form").reset();

    let form = document.getElementById("cardForm");
    form.style.display = "none";
}

function editCardInfo() {
    let id = document.getElementById("editCardId").innerHTML;

    let title = document.getElementById("editTitle").value;
    let text = document.getElementById("editContent").value;
    let date = document.getElementById("editDate").value;
    let card = document.getElementById(`${id}`);

    card.getElementsByTagName("h3")[0].innerHTML = title;
    card.getElementsByTagName("p")[2].innerHTML = text;
    card.getElementsByTagName("p")[0].innerHTML = `Due date: ${date}`;

    let form = document.getElementById("cardEditForm");
    form.style.display = "none";

}

function deleteCard(cardId) {
    let card = document.getElementById(cardId);
    card.remove();
}

function markDone(cardId) {
    let card = document.getElementById(cardId);
    let status = card.getElementsByClassName("status")[0];

    status.innerHTML = "Status: Completed ✅";
    status.style.color = "green";

}

function markUndone(cardId) {
    let card = document.getElementById(cardId);
    let status = card.getElementsByClassName("status")[0];


    status.innerHTML = "Status: Awaiting completion ❌";
    status.style.color = "red";

}

function closeForm() {
    document.getElementById("form").reset();

    let form = document.getElementById("cardForm");
    form.style.display = "none";
}
function closeEditForm() {
    document.getElementById("editForm").reset();

    let form = document.getElementById("cardEditForm");
    form.style.display = "none";
}

function editCard(cardId) {
    let form = document.getElementById("cardEditForm");
    form.style.display = "flex";

    let card = document.getElementById(cardId);

    let title = card.getElementsByTagName("h3")[0].innerHTML;
    let content = card.getElementsByTagName("p")[2].innerHTML;
    let date = card.getElementsByTagName("p")[0].innerHTML.slice(10, 20);

    form.getElementsByTagName("p")[0].innerHTML = cardId;
    form.getElementsByTagName("input")[0].value = title;
    form.getElementsByTagName("textarea")[0].value = content;
    form.getElementsByTagName("input")[1].value = date;
}