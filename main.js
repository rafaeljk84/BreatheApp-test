// main.js

const container = document.getElementById ('container');
const text = document.getElementById ('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

console.log(breatheTime, holdTime);
// isso aqui é desnecessário, foi só para mostrar o resultado inicialmente e depois deletado, mas mantive porque é muito interessante

function breathAnimation() {
    container.className = 'container grow';
    text.innerText = 'Inspire...';
    // isso aqui é desnecessário, foi só para mostrar o resultado inicialmente e depois deletado, mas mantive como comentário porque é muito interessante
    // console.log('Inspire...');

    setTimeout(function() {
        text.innerText = 'Segure...';
        // idem ao comentário acima
        // console.log('Segure...');
        
        setTimeout(function() {
            container.className = 'container shrink';
            text.innerText = 'Expire...';
            // mais uma vez mesmo comentário
            // console.log('Expire...');
        }, holdTime);
    }, breatheTime);
}

breathAnimation();

setInterval(breathAnimation, totalTime);