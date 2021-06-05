//ANSWER 58 TO 67

      window.onload = function() {
        domElements();
     };

     function domElements() {
         let mainContent = document.getElementById("main-content");
         console.log(mainContent.childNodes);

         let renderClass = document.getElementsByClassName("render");
         console.log(mainContent.childNodes[1]);
         console.log(mainContent.childNodes[3]);
         console.log(mainContent.childNodes[5]);
         let firstName = document.getElementById("first-name");
         let first_Name = mainContent.childNodes[1].innerHTML;
         firstName.value = first_Name.slice(13);
         let lastName = document.getElementById("last-name");
         let last_Name = mainContent.childNodes[3].innerHTML;
         lastName.value = last_Name.slice(11);
         let emailAddress = document.getElementById("email");
         let email_Address = mainContent.childNodes[5].innerHTML;
         emailAddress.value = email_Address.slice(8);
     }