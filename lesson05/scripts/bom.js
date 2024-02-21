let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value != " ") {
        const li = document.createElement('li');
        const time = new Date
        var formatedtime = time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
        li.textContent = `${input.value} - added at ${formatedtime}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
            input.value = " "
        })
    }
})



