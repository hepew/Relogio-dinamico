function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var boa = document.getElementById('boa')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML =` <strong>${hora}</strong> horas  <strong>${minutos}</strong> minutos  <strong>${segundos}</strong> segundos`


    if (hora >= 0 && hora < 12){
        img.src = "fotos/manha.jpg"
        document.body.style.background = '#e2cd9f'
        //BOM DIA
    } else if (hora >= 12 && hora < 18){
        boa.innerHTML = "Boa Tarde!"
        img.src = "fotos/tarde.jpg"
        document.body.style.background = '#b9846f'
    } else{
        img.src = "fotos/noite.jpg"
        document.body.style.background = '#515154'
    }

}
carregar()
setInterval(carregar, 1000)