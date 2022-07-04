function getDayOfTheWeek(connect) {
    let diaSemanaTexto;
    
switch (connect) {
    case 0:
        diaSemanaTexto = 'Sunday' 
        return diaSemanaTexto;

    case 1:
        diaSemanaTexto = 'Monday' 
        return diaSemanaTexto;

    case 2:
        diaSemanaTexto = 'Tuesday' 
        return diaSemanaTexto;

    case 3:
        diaSemanaTexto = 'Wednesday' 
        return diaSemanaTexto;

    case 4:
        diaSemanaTexto = 'Thursday' 
        return diaSemanaTexto;

    case 5:
        diaSemanaTexto = 'Friday' 
        return diaSemanaTexto;

    case 6:
        diaSemanaTexto = 'Saturday' 
        return diaSemanaTexto;

    default: // like `else`
        diaSemanaTexto = ''; 
}
}

function getDayOfTheMonth(connect) {
    let diaMonthTexto;
    
switch (connect) {
    case 1:
        diaMonthTexto = 'January' 
        return diaMonthTexto;

    case 2:
        diaMonthTexto = 'February' 
        return diaMonthTexto;

    case 3:
        diaSemanaTexto = 'March' 
        return diaSemanaTexto;

    case 4:
        diaMonthTexto = 'April' 
        return diaMonthTexto;

    case 5:
        diaMonthTexto = 'May' 
        return diaMonthTexto;

    case 6:
        diaMonthTexto = 'June' 
        return diaMonthTexto;

    case 7:
        diaMonthTexto = 'July' 
        return diaMonthTexto;

    case 8:
        diaMonthTexto = 'August' 
        return diaMonthTexto;
    
    case 9:
        diaMonthTexto = 'September' 
        return diaMonthTexto;

    case 10:
        diaMonthTexto = 'October' 
        return diaMonthTexto;

    case 11:
        diaMonthTexto = 'November' 
        return diaMonthTexto;

    case 12:
        diaMonthTexto = 'Dezember' 
        return diaMonthTexto;

    default: // like `else`
        diaMonthTexto = ''; 
}
}

    function formatTime(num) {
        if (num<=9) {
            return `0${num}`
        } else {
            return `${num}`
        }
    }

    function getDate () {
        const clock = document.querySelector('.clock');
        const time = new Date();
        const hour = time.getHours();
        const month = time.getMonth() + 1;
        const year = time.getFullYear();
        const dayOfTheWeek = time.getDate();
        const diaSemana = time.getDay();
        const minutes = time.getMinutes();
        let diaSemanaTexto = getDayOfTheWeek(diaSemana); 
        let monthText = getDayOfTheMonth(month); 
        
        clock.innerHTML = `${diaSemanaTexto} the ${formatTime(diaSemana)}th of ${monthText}, ${year} at ${hour}:${minutes}`; 
    }
    
    getDate();
    
   



    
    



