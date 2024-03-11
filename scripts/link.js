const giturl = "https://github.com/ALEGREBUSTOS/wdd230/blob/08bc003fcc0dbb667ff8bdb249a138e34120f681/data/links.json";

async function getlinks() {
    const response = await fetch(giturl);
    const data = await response.json();
    console.log(data);
  }
  
  getlinks(giturl);