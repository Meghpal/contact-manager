class Contact {
    constructor(name, phone, email, imageUrl) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        if(imageUrl ===""){
            this.imageUrl = "https://gladstoneentertainment.com/wp-content/uploads/2018/08/blank-portrait.png";
        } else {
            this.imageUrl = imageUrl;
        }
    }
}