function lastmodification() {
    // Obtiene el objeto Document actual
    const doc = document;

    doc.lastModified

    return doc.lastModified

}

function currentyear(){
    let today=new Date();
    
    let currentyr=today.getFullYear()

    return currentyr
}

function updatefooter(lastmodification,currentyear){

    const doc=document
    doc.querySelector('#lastModified').textContent=`Last modification ${lastmodification}`
    doc.querySelector('#current-year').textContent=`© ${currentyear} Alejo Alegre Bustos  - Argentina `
}


updatefooter(lastmodification(),currentyear())
