let images = document.querySelectorAll('#images img');

// le parcours du tableau en laissant le 1er image a decouvert
for (let i = 1; i < images.length; i++) {
    images[i].classList.add('hidden');
}

// quand on clique sur l'icon suivant où arrière
document.getElementById('next').addEventListener('click',function(){
    next();
});
document.getElementById('prev').addEventListener('click',function(){
    prev();
});


//quand on clique sur l'icon de play où pause
let reglages =document.querySelector('#reglages');

reglages.addEventListener('click',function(){
        PlayPause(this)
    });

// l'execution avec les touches du clavier respectivement 
// la droite le derriere et le touche espace
window.addEventListener('keydown',function(e){
    if(e.key == "ArrowRight" ){
        next()
    }else if(e.key== "ArrowLeft"){
        prev()
    }
});
window.addEventListener('keydown',function(e){
    if(e.key ==" "){
        PlayPause(reglages);
    }
});

// la fonction de reglage play et pause
let pause ='<i class="bi bi-pause-fill"></i>';
let play ='<i class="bi bi-play-fill"></i>';
let interval;
let imagesI = document.querySelectorAll('#images i')
const PlayPause =(reglage)=>{
    reglage.classList.toggle('active')
    if(reglage.classList.contains('active')){
        reglage.innerHTML = pause;
        interval = setInterval(next,2000);

            imagesI[1].classList.remove('active')
            imagesI[0].classList.add('active')
        
        
    }else{
        document.querySelector('#images i').classList.remove('active')
        reglage.innerHTML = play
        clearInterval(interval);
        imagesI[0].classList.remove('active')
        imagesI[1].classList.add('active')
    }
}
    
// la fonction de changer photo en avant
let imgActive = 0;
const next = function(){
    // on desative les autres images
    images[imgActive].classList.add('hidden');
    imgActive+=1
    if(imgActive>=images.length){
        imgActive=0
    }
    images[imgActive].classList.remove('hidden');

};

// la fonction de changer photo en arrière
const prev = function(){
    // on desative les autres images
    images[imgActive].classList.add('hidden');
    imgActive-=1
    if(imgActive<=0){
        imgActive=images.length - 1
    }
    images[imgActive].classList.remove('hidden');

};
