        var a = document.querySelector(".container");
        var b = document.querySelector(".peresadka1");
        var c = document.querySelector(".peresadka2");
        var d = document.querySelector(".peresadka3");
        var z = document.querySelector(".peresadka5");
        var x = document.querySelector("#hello");

        var en = document.querySelector(".mz");
        en.addEventListener("click", function(e){
          if(e.target.checked){
            b.style.display = "block"; 
          }else{
            b.style.display = "none"; 
          }
        });   

        var ens = document.querySelector(".kz");
        ens.addEventListener("click", function(e){
          if(e.target.checked){
            c.style.display = "block"; 
          }else{
            c.style.display = "none"; 
          }
        });   

         var enss = document.querySelector(".hz");
        enss.addEventListener("click", function(e){
          if(e.target.checked){
            d.style.display = "block"; 
          }else{
            d.style.display = "none"; 
          }
        });   

        var ensss = document.querySelector(".mz");
        ensss.addEventListener("click", function(e){
          if(e.target.checked){
            e.style.display = "block"; 
          }else{
            e.style.display = "none"; 
          }
        });

        var enssss = document.querySelector(".xz");
        enssss.addEventListener("click", function(e){
          if(e.target.checked){
            z.style.display = "block"; 
          }else{
            z.style.display = "none"; 
          }
        });   

          var ensssss = document.querySelector(".hx");
        ensssss.addEventListener("click", function(e){
          if(e.target.checked){
            x.style.display = "block"; 
          }else{
            x.style.display = "none"; 
          }
        });   