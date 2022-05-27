const mostrar = document.getElementById('menu')
const menu = document.getElementById('mostrar')
const reproducir = document.getElementById('reproducir')
const play = document.getElementById('play')

const ILoveYouBaby = document.getElementById('ILoveYouBaby')
const ILoveYouBaby_play = document.getElementById('ILoveYouBaby_play')


const sentidos = document.getElementById('sentidos')
const sentidos_play = document.getElementById('sentidos_play')


const andreaBocelli = document.getElementById('andreaBocelli')
const andreaBocelli_play = document.getElementById('andreaBocelli_play')

const leave = document.getElementById('leave')
const leave_play = document.getElementById('leave_play')


const secret = document.getElementById('secret')
const secret_play = document.getElementById('secret_play')

const todoDeTi = document.getElementById('todoDeTi')
const todoDeTi_play = document.getElementById('todoDeTi_play')

const cancionPrincipal = document.getElementById('cancionPrincipal')
const cancionPrincipal_play = document.getElementById('cancionPrincipal_play')

const like = document.getElementsByClassName('icon-heart')



//que cuando un audio este sonando y ponga otro audio se pause el que este sonando

document.addEventListener(
    "play",
    function(e) {
      var audios = document.getElementsByTagName("audio");
      for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
          audios[i].pause();
        }
      }
    },
    true
  );




for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', (e) => {
        e.preventDefault()
        like[i].classList.toggle('corazon')
        
    })
}


cancionPrincipal.addEventListener('click', (e) => {
    e.preventDefault()
    if(cancionPrincipal_play.paused){
        cancionPrincipal_play.play()
        
    }else{
        cancionPrincipal_play.pause()
    }
})


todoDeTi.addEventListener('click', (e) => {
    e.preventDefault()
    if(todoDeTi_play.paused){
        todoDeTi_play.play()
        
    }else{
        todoDeTi_play.pause()
    }




})



secret.addEventListener('click', (e) => {
    e.preventDefault()
    if(secret_play.paused){
        secret_play.play()
        
    }else{
        secret_play.pause()
    }
})


leave.addEventListener('click', (e) => {
    e.preventDefault()
    if(leave_play.paused){
        leave_play.play()
    }else{
        leave_play.pause()
    }


})



andreaBocelli.addEventListener('click', (e) => {
    e.preventDefault()

    if(andreaBocelli_play.paused){
        andreaBocelli_play.play()
    }else{
        andreaBocelli_play.pause()
    }

})




sentidos.addEventListener('click', (e) => {
    e.preventDefault()
    if(sentidos_play.paused){
        sentidos_play.play()
    }else{
        sentidos_play.pause()
    }

})

ILoveYouBaby.addEventListener('click', (e) => {
    e.preventDefault()
    if(ILoveYouBaby_play.paused){
        ILoveYouBaby_play.play()
    }else{
        ILoveYouBaby_play.pause()
    }
})




reproducir.addEventListener('click', () =>{
    console.log('click')
    if(play.paused){
        play.play()
    }else{
        play.pause()
    }
    
}) 
let cont =1
mostrar.addEventListener('click', () =>{
    if(cont == 1){
        menu.style.right = "1em"
        menu.style.transition = "all .3s"

        cont =0;
    }else{
        cont =1;
        menu.style.right = "-11em"
        menu.style.transition = "all .3s"
    }
})


//click en el botón de copiar


const btnCopy = document.querySelector('.btn-copy')
const txtCopy = document.querySelector('.box span');
const tooltip = document.querySelector('.tooltip');

const txt = "Hello World"

btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(txtCopy.textContent)
    tooltip.classList.add('show')
    setTimeout(() => {
        tooltip.classList.remove('show')
    }, 1000)
})



