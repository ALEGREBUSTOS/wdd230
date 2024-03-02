const visits= document.querySelector('#visits');
let number_visits=Number(window.localStorage.getItem("visits-ls"))

if (number_visits == 0){
    visits.textContent="Welcome! this is your first visit!";
}else{
    visits.textContent = `Number of Visits: ${number_visits}`
}