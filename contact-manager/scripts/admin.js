var users = JSON.parse(localStorage.getItem("users"));

var userList = document.querySelector('#userList')
var noUsers = document.querySelector('#noUsers');



var generateListItem = function (user) {
    var li = document.createElement('li');
    var button = document.createElement('button');
    var card = document.createElement('div');
    var cardHeader = document.createElement('div');

    li.className = 'list-group-item';
    button.className = 'btn btn-danger float-right';
    cardHeader.className = 'card-header';

    cardHeader.innerHTML = user.name;

    card.className = user.active? 'card' : 'card bg-secondary';

    button.innerHTML = user.active ? 'X' : '&#9100;';

    button.onclick = function () {
        enableDisableUser(user);

    }

    // buttonComplete.onclick = function () {
    //    
    // }

    cardHeader.appendChild(button);
    card.appendChild(cardHeader);
    li.appendChild(card);
    return li;
}

var enableDisableUser = function (user) {
    if(user.active===false)
    {
        user.active=true;
    }
    else
    user.active=false;
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    render(users);

}


function render(users) {
    userList.innerHTML = '';
    if (users.length === 0) {
        noUsers.style.display = 'block';
    } else {
        noUsers.style.display = 'none';
        users.forEach(function (t) {
            if (t.name !== "admin") {
                userList.appendChild(generateListItem(t));
            }
        });
    }
}

render(users);