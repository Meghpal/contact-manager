addNewContact = document.querySelector("#addNewContact");
addContact = document.querySelector("#addContact");
adder = document.querySelector("#adder");
contactList = document.querySelector("#contactList");
alerter = document.querySelector("#alerter");

nameInp = document.querySelector("#nameInp");
phoneInp = document.querySelector("#phoneInp");
emailInp = document.querySelector("#emailInp");
imageInp = document.querySelector("#imageInp");

generateStructure = (contact) => {
    li = document.createElement("li");
    row = document.createElement("div");
    column1 = document.createElement("div");
    column2 = document.createElement("div");
    card = document.createElement("div");
    cardHeader = document.createElement("div");
    cardBody = document.createElement("div");
    image = document.createElement("IMG");

    li.className = "list-group-item p-1 border-0";
    row.className = "row";
    column1.className = "col-3 p-0 m-1";
    column2.className = "col p-0";
    card.className = "card text-white bg-dark";
    cardHeader.className = "card-header";
    cardBody.className = "card-body";

    cardHeader.innerText = contact.name;
    cardBody.innerHTML = contact.phone;

    image.setAttribute("src", contact.imageUrl);
    image.setAttribute("width", "110px");

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    column1.appendChild(image);

    column2.appendChild(card);

    row.appendChild(column1);
    row.appendChild(column2);

    li.appendChild(row);

    return li;
}

render = () => {
    contactList.innerHTML = '';

    var all = JSON.parse(localStorage.getItem("users"));
    var currUser = localStorage.getItem("session");

    for (var user of all) {
        if (user.name == currUser) {
            if (user.contactList.length == 0) {
                alerter.classList.remove('d-none');
            } else {
                for (var contact of user.contactList) {
                    alerter.classList.add('d-none');
                    contactList.appendChild(generateStructure(contact));
                }
            }
            break;
        }
    }
}

render();

addNewContact.onclick = () => {
    console.log(adder.className.includes("d-none"));
    if (adder.className.includes("d-none")) {
        adder.classList.remove("d-none");
        adder.classList.add("d-block");
    } else {
        adder.classList.remove("d-block");
        adder.classList.add("d-none");
    }
}

addContact.onclick = (e) => {
    e.preventDefault();

    var all = JSON.parse(localStorage.getItem("users"));
    var currUser = localStorage.getItem("session");

    for (var user of all) {
        if (user.name == currUser) {
            user.contactList.push(new Contact(nameInp.value, phoneInp.value, emailInp.value, imageInp.value));
            break;
        }
    }
    console.log(JSON.stringify(all));
    localStorage.setItem("users", JSON.stringify(all));
    
    render();
}