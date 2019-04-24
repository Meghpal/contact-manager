            function checkPassword(form) { 
                console.log('as');
                password1 = form.password1.value; 
                password2 = form.password2.value; 
  
             
                if (password1 == '') {
                    alert ("Please enter Password"); 
                    return false;
                }
               
                else if (password2 == '') {
                    alert ("Please enter confirm password"); 
                    return false;
                }
                
                else if (password1.length < 8){
                    alert ("\nPassword must be 8 digits") ;
                    return false; 
                }
                
                else if (password1 != password2) { 
                    alert ("\nPassword did not match: Please try again...") ;
                    return false; 
                } 
  
               
                else{ 
                    usersArray= JSON.parse(window.localStorage.getItem('users'));
                    console.log((form.name.value, form.email.value, form.password1.value));
                    user = new User(form.name.value, form.email.value, form.password1.value);
                    userArray.push(user);

                    localStorage.setItem('users', JSON.stringify(usersArray))
                    alert("Password Match: Welcome to Contacts manager") ;
                    return false; 
                    
                } 
                return false;
               
            } 
        