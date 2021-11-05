
const calcular= document.getElementById('calcular');


function media () {
    const nome= document.getElementById('nome').value;
    const notaI= parseFloat (document.getElementById('notaI').value);
    const notaII= parseFloat (document.getElementById('notaII').value);
    const notaIII= parseFloat (document.getElementById('notaIII').value);
    const notaIV= parseFloat (document.getElementById('notaIV').value);
    var ano = 4;
    const resultado= document.getElementById('resultado');

    if(nome !=='' && notaI !=='' && notaII !=='' && notaIII !=='' && notaIV !==''){
        
        const valorMedia =((notaI+notaII+notaIII+notaIV)/4).toFixed(2);
        let classificacao = '';
        if (valorMedia < 5){
            classificacao = 'reprovado'
        }else {
            classificacao = "Aprovado"
        }
        resultado.textContent = `${nome} sua nota é ${valorMedia}, e você está ${classificacao}`;
    } else {
       resultado.textContent = 'Preencha todos os campos!'
    }
}
calcular.addEventListener('click', media);