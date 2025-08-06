let form=document.getElementById("form");
        let username = document.getElementById("username");
        let password=document.getElementById("password");

        let formData=JSON.parse(localStorage.getItem("details")) || [] ;
        console.log(formData);
    
form.addEventListener('submit',function(e){
    e.preventDefault();

    let userna=username.value.trim();
    let pass=password.value.trim();


    let login = false;
    let uservalue = false;
    let passvalue = false;

        for(let i=0;i<formData.length;i++){
            if(formData[i].username===userna && formData[i].password===pass){
                login=true;
                break;
            } else if(formData[i].username===userna){
              uservalue=true;
              passvalue=true;
              break;
        }
    }
        if(login){
            alert("Login successful");
        } else if(!uservalue){
            alert("username incorrect");
        } else if(passvalue){
            alert("password incorrect");
        }
    });