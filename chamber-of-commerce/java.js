function currYear()
{
    let year = new Date;
    let currentYear = year.getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
}

function lastMod()
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

    document.getElementById("fp5").innerHTML = days + ", " + day.getDate() + " " + months + " " + day.getFullYear();

}