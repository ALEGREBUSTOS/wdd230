const giturl = "https://alegrebustos.github.io/wdd230/data/links.json";

async function getlinks() {
    const response = await fetch(giturl);
    const data = await response.json();
    displaydata(data);
  }
  
  getlinks(giturl);

function displaydata(){
    
}