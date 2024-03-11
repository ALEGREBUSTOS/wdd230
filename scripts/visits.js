function get_current_date() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function display_visit_message() {
    const visits_key = 'visits';
    const last_visit_key = 'last_visit';
    const visits = localStorage.getItem(visits_key);
    const last_visit = localStorage.getItem(last_visit_key);
    const visit_info = document.querySelector('#visits');

    if (visits === null || last_visit === null) {

        localStorage.setItem(visits_key, 1);
        localStorage.setItem(last_visit_key, get_current_date());
        visit_info.textContent = 'Welcome! It\'s your first visit.';
    } else {
        const current_date = get_current_date();
        const days_since_last_visit = Math.floor((Date.parse(current_date) - Date.parse(last_visit)) / (24 * 60 * 60 * 1000));

        if (days_since_last_visit <= 3) {
            visit_info.textContent = 'Welcome back! It\'s good to see you again!';
        } else {
            localStorage.setItem(visits_key, Number(visits) + 1);
            localStorage.setItem(last_visit_key, current_date);
            visit_info.textContent = `Welcome back! You visited ${visits} times today.`;
        }
    }
}

display_visit_message();