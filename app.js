const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 30, 31];

function ageCalculator() {
    
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-inputs").value);
    let birthMonth, birthDate, birthYear;
    let inputDetails=
    {
    date:inputDate.getDate(),
    month:inputDate.getMonth()+1,
    year:inputDate.getFullYear()
    };

    let currentYear = today.getUTCFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChecker(currentYear);
    if(
        inputDetails.year> currentYear ||
        (inputDetails.month>currentMonth && inputDetails.year == currentYear ) ||
        (inputDetails.date>currentDate && inputDetails.month == currentMonth && inputDetails.year == currentYear )
    ){
        alert("Not Born Yet");
        displayResult("-", "-","-");
        return
    }
    birthYear = currentYear - inputDetails.year;
    if (currentMonth >= inputDetails.month) {
        birthMonth = currentMonth - inputDetails.month
    }else{
        birthYear--;
        birthMonth= 12 + currentMonth - inputDetails.month;
    }
    if (currentDate >= inputDetails.date) {
        birthDate = currentDate - inputDetails.date;
    }else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - inputDetails.date

        if (birthMonth < 0) {
            birthMonth = 11
            birthYear--;
        }
    }
        
    displayResult(birthDate , birthMonth , birthYear);

}

function displayResult(bDate, bMonth, bYear) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;

}

function leapChecker(year) {
    if (year % 4 == 0 ||(year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    }else{
        months[1] = 28;
    }
}