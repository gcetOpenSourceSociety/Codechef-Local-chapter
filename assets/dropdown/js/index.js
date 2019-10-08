let md=document.querySelector(".menu-button");
         
          let navbar=document.querySelector("nav")
           let bd=document.querySelector("body");
            md.addEventListener("click", function(){
                console.log("clicked");
                document.getElementById("dropdown").classList.toggle("new");
            });