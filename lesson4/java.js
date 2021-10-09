function years()
            {
                let output = new Date();
                let something = output.getFullYear();
                document.getElementById("copyyear").innerHTML = something;
            }
        
        function year()
            {
                let string = document.lastModified;
                document.getElementById("year").innerHTML = string;


            }
            
            function toggleMenu()
            {
                document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

            }
            