    
    
        




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

           

            function date()
            {
                let day = new Date(document.lastModified);
                let daye = day.getDay();
                let month = day.getMonth();
                
                switch(month)
                {
                    case 0:
                        months = "January"
                    break;

                    case 1:
                        months = "February"
                    break;

                    case 2:
                        months = "March"
                    break;

                    case 3:
                        months = "April"
                    break;

                    case 4:
                        months = "May"
                    break;

                    case 5:
                        months = "June"
                    break;

                    case 6:
                        months = "July"
                    break;
                    
                    case 7:
                        months = "August"
                    break;

                    case 8:
                        months = "September"
                    break;

                    case 9:
                        months = "October"
                    break;

                    case 10:
                        months = "November"
                    break;

                    case 11:
                        months = "December"
                    break;
                
                
                
                
                }
                switch(daye)
                {
                    case 0:
                        days = "Sunday"
                    break;

                    case 1:
                        days = "Monday"
                    break;

                    case 2:
                        days = "Tuesday"
                    break;

                    case 3:
                        days = "Wednesday"
                    break;

                    case 4:
                        days = "Thursday" 
                    break;

                    case 5:
                        days = "Friday"
                    break;

                    case 6:
                        days = "Saturday"
                    break;
                }
                
                document.getElementById("day").innerHTML = days + ", " + day.getDate() + " " + months + " " + day.getFullYear();
            
            }
            
            function toggleMenu()
            {
                document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
                
            }

            function pancakeBanner()
            {
                
                var days = new Date();
                var day = days.getDay();
                
                if(day != 5)
                {
                    document.getElementById("p-banner").classList.add("pancake");
                }
            }

            document.addEventListener("DOMContentLoaded", function(){
                let temp = parseFloat(document.querySelector('#temp-span').innerHTML);
                let speed = parseFloat(document.querySelector('#wind-speed-span').innerHTML);
                let wcTemp = document.getElementById('wind-chill-span');
                wcTemp.innerHTML = buildWC(speed,temp);
                
             
            });
            
        function buildWC(speed, temp)
                {
                    
                    let wc = 35.74 + .6215 * temp - 35.75 * Math.pow(speed,.16) +.4275 * temp * Math.pow(speed,.16);
                    console.log(wc);
                    wc = Math.floor(wc);
                    wc = (wc > temp)?temp:wc;
                    console.log(wc);
                    wc =  wc + '??F';
                    return wc;
                    
                }
            
