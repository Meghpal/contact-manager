localStorage.setItem("users", JSON.stringify([
    new User("admin", "jondoe@gmail.com", "adminpass", "admin"),
    new User("user1", "user1@gmail.com", "userpass"),
]));

localStorage.setItem("session", "user1");