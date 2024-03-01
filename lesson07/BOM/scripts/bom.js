let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let list = document.querySelector('#list');

function getChapterList() {
    return JSON.parse(localStorage.getItem('myfavbomlist'));
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = displayList(input.value);
        chaptersArray.push(li.textContent);
        setChapterList();
        input.value = '';
        input.focus();
    }
});


function displayList(chapter) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    const time = new Date
    var formatedtime = time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    li.textContent = `${input.value} - added at ${formatedtime}`;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    return li

}

function setChapterList() {
    localStorage.setItem('myfavbomlist', JSON.stringify(chaptersArray));
}


function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}