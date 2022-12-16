/* Calculadora IMC */
function calculoImc() {
  var alt = document.querySelector('.altura')
  var pes = document.querySelector('.peso')
  

  
  var alt = Number (alt.value)
  var pes = Number (pes.value)
  var altq = alt * alt

  var imc =  pes / altq *10000
  
  var imcc = imc.toFixed(1)
      

  seu_imc.innerHTML = `Seu indice de massa corporal é ${imcc}`

  /* imc planos */
  var imgp = document.getElementById('fotoplano')
  var titlep = document.getElementById('titulo_plano')
  var textp = document.getElementById('textoplan')

  if( imc < 18.5){
    imgp.src='img/plano2.png'
    titulo_plano.innerHTML = `Abaixo do peso`
    textoplan.innerHTML = `Bulking`
    preco.innerHTML = `Valor Promocional: R$ 100,00`

  } else if(imc < 25){
    imgp.src ='img/plano3.png'
    titulo_plano.innerHTML = `Peso ideal `
    textoplan.innerHTML = `Manutenção`
    preco.innerHTML = `Valor Promocional: R$ 80,00`

  } else if(imc < 30) {
    imgp.src ='img/plano1.png'
    titulo_plano.innerHTML = `Sobrepeso `
    textoplan.innerHTML = `Cutting`
    preco.innerHTML = `Valor Promocional: R$ 100,00`
  }
  
  else if(imc < 35) {
    imgp.src = 'img/plano1.png'
    titulo_plano.innerHTML = `Obesidade grau 1 `
    textoplan.innerHTML = `Cutting`
    preco.innerHTML = `Valor Promocional: R$ 180,00`
  }

  else {
    imgp.src = 'img/plano1.png'
    titulo_plano.innerHTML = `Obesidade grau 2 `
    textoplan.innerHTML = `Cutting`
    preco.innerHTML = `Valor Promocional: R$ 180,00`
  }



}

/*FIM CALCULADORA*/

/*FORMULARIO*/




/*FIM FORM*/