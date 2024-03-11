const giturl = "https://github.com/ALEGREBUSTOS/wdd230/data/links.json";

async function getlinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }
  
  getlinks();