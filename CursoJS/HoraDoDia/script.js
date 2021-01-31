function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 10//data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 6 && hora < 12){
        img.src = "manha.jpg"
        document.body.style.background = '#7296a6'
    }
    else if (hora >= 12 && hora < 18){
        img.src = "tarde.jpg"
        document.body.style.background = '#febe1e'
    }
    else {
        img.src = "noite.jpg"
        document.body.style.background = '#072847'
    }
}