
const btn = document.querySelector('.btn');


function callback(){
    const peso = parseInt(document.querySelector('.peso').value);
    const altura = parseFloat(document.querySelector('.altura').value);

    let TotalImc = peso / altura **2;
    
    console.log(TotalImc)
    if(TotalImc < 17 ){
        document.querySelector('label').innerText = 'Muito abaixo do peso';
        console.log('Muito abaixo do peso')
    }
    else if(TotalImc >= 17 && TotalImc < 18.5){
        document.querySelector('label').innerText = 'Abaixo do peso';
        console.log('Abaixo do peso')
    }

    else if(TotalImc >= 18.5 && TotalImc < 25){
        document.querySelector('label').innerText = 'Peso ideal';
        console.log('Peso ideal')
    }

    else if(TotalImc >= 25 && TotalImc < 30){
        document.querySelector('label').innerText = 'Sobre peso ';
        console.log('Sobre peso')

    }
    else if(TotalImc >= 30 && TotalImc < 35){
        document.querySelector('label').innerText = 'Obsidade';
        console.log('Obsidade')
    }
    else if(TotalImc >= 35 && TotalImc < 40){
        document.querySelector('label').innerText = 'Obsidade severa ';
        console.log('Obsidade severa')
    }
    else if(TotalImc >= 40){
        document.querySelector('label').innerText = 'Obsidade mórbida ';
        console.log('Obsidade mórbida')
    }
}



btn.addEventListener('click',callback)