let noticias = document.querySelectorAll('.noticias_titulo');
let envivo = document.querySelector('.enVivo');
let audio = document.querySelector('.audio');
let pausa= document.querySelector('.pausa');
let btnOnline = document.querySelector('.onlineBtn');


noticias.forEach(noticia =>{
    noticia.addEventListener('mouseover', function(){
    noticia.style.transition = 'all 0.3s linear';
    noticia.style.color = '#ffffff';
    noticia.style.backgroundColor = '#fc0211';
    })})

envivo.addEventListener('click', ()=>{
    if(audio.paused){
        funcion_uno();
    }else{
        funcion_dos();
    }
})

function funcion_uno()
{
 audio.play();
        envivo.style.backgroundColor = '#fc0211';
        envivo.style.color = '#ffffff';
        envivo.style.boxShadow = '0px 0px 10px #fc0211';
        envivo.style.transition = 'all 0.3s linear';
        envivo.style.transition.boxShadow = '0px 0px 10px #fc0211';
        btnOnline.style.display = 'block';
}
function funcion_dos(){
    audio.pause();
        envivo.style.backgroundColor = 'transparent';
        envivo.style.color = '#fc0211';
        envivo.style.boxShadow = 'none';
        btnOnline.style.display = 'none';
}




   
    
    
    
    
   




