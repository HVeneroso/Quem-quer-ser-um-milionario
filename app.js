const question = document.getElementById('question')
const prize = document.querySelector('.prize_1')
const prize2 = document.querySelector('.prize_2')
const prize3 = document.querySelector('.prize_3')
const prize4 = document.querySelector('.prize_4')
const prize5 = document.querySelector('.prize_5')
const prize6 = document.querySelector('.prize_6')
const prize7 = document.querySelector('.prize_7')
const prize8 = document.querySelector('.prize_8')
const prize9 = document.querySelector('.prize_9')
const prize10 = document.querySelector('.prize_10')
const prize11 = document.querySelector('.prize_11')
const prize12 = document.querySelector('.prize_12')
const prize13 = document.querySelector('.prize_13')
const prize14 = document.querySelector('.prize_14')
const prize15 = document.querySelector('.prize_15')

const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')
/*A certo
    a.addEventListener('click',()=>{
        a.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            a.classList.remove('true')
            questions3()
            b.classList.remove('false')
            c.classList.remove('false')
            d.classList.remove('false')
        },1500)
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        a.classList.add('true')
    })
    c.addEventListener('click',()=>{
        c.classList.add('false')
        a.classList.add('true')
    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        a.classList.add('true')
    })



B certo
    a.addEventListener('click',()=>{
        a.classList.add('false')
        b.classList.add('true')
    })
    b.addEventListener('click',()=>{
         b.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            b.classList.remove('true')
            questions4()
            a.classList.remove('false')
            c.classList.remove('false')
            d.classList.remove('false')
        },1500)
    })

    c.addEventListener('click',()=>{
        c.classList.add('false')
        b.classList.add('true')
    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        b.classList.add('true')
    })



C certo   
  a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions4()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })


D certo
     a.addEventListener('click',()=>{
        a.classList.add('false')
        d.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        d.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('false')
        d.classList.add('true')

    })
    d.addEventListener('click',()=>{
        d.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            d.classList.remove('true')
            questions4()
            a.classList.remove('false')
            b.classList.remove('false')
            c.classList.remove('false')
        },1500)
    })
*/
function questions(){
    question.innerText = 'Quando o assunto é coleta seletiva, temos várias cores diferentes de lixeira. Qual a cor da lixeira do plástico?'
    a.innerText = 'A: Azul'
    b.innerText = 'B: Verde'
    c.innerText = 'C: Vermelho'
    d.innerText = 'D: Cinza'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions2()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}
function questions2(){
    question.innerText = 'Qual das opções não é uma energia renovável?'
    a.innerText = 'A: Gás Natural'
    b.innerText = 'B: Eólica'
    c.innerText = 'C: Solar'
    d.innerText = 'D: Hídrica'

    a.addEventListener('click',()=>{
        a.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            a.classList.remove('true')
            questions3()
            b.classList.remove('false')
            c.classList.remove('false')
            d.classList.remove('false')
        },2500)
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        a.classList.add('true')
    })
    c.addEventListener('click',()=>{
        c.classList.add('false')
        a.classList.add('true')
    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        a.classList.add('true')
    })
}
function questions3(){
    question.innerText = 'O que é sustentabilidade?'
    a.innerText = 'A: Uma fonte de energia renovável.'
    b.innerText = 'B: A capacidade de manter ou preservar recursos para gerações futuras.'
    c.innerText = 'C: A exploração irresponsável dos recursos naturais.'
    d.innerText = 'D:  Um tipo de agricultura intensiva'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        b.classList.add('true')
    })
    b.addEventListener('click',()=>{
         b.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            b.classList.remove('true')
            questions4()
            a.classList.remove('false')
            c.classList.remove('false')
            d.classList.remove('false')
        },1500)
    })

    c.addEventListener('click',()=>{
        c.classList.add('false')
        b.classList.add('true')
    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        b.classList.add('true')
    })
}
function questions4(){
    question.innerText = 'Qual é a principal causa do aquecimento global?'
    a.innerText = 'A: Emissões de gases de efeito estufa.'
    b.innerText = 'B: Consumo excessivo de carne.'
    c.innerText = 'C: Uso de plástico.'
    d.innerText = 'D: Derrubada de florestas tropicais.'

    a.addEventListener('click',()=>{
        a.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            a.classList.remove('true')
            questions5()
            b.classList.remove('false')
            c.classList.remove('false')
            d.classList.remove('false')
        },1500)
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        a.classList.add('true')
    })
    c.addEventListener('click',()=>{
        c.classList.add('false')
        a.classList.add('true')
    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        a.classList.add('true')
    })
}
function questions5(){
    question.innerText = 'O que é agricultura sustentável?'
    a.innerText = 'A: Uso intensivo de pesticidas e fertilizantes.'
    b.innerText = 'B: Uso de sementes geneticamente modificadas'
    c.innerText = 'C: Práticas agrícolas que protegem o meio ambiente e conservam recursos.'
    d.innerText = 'D: Plantio de monoculturas em larga escala'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions6()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}
function questions6(){
    question.innerText = 'O que são energias renováveis?'
    a.innerText = 'A: Energias provenientes de fontes minerais.'
    b.innerText = 'B: Energias produzidas a partir da queima de combustíveis fósseis.'
    c.innerText = 'C: Energias que não causam impactos ambientais'
    d.innerText = 'D: Energias obtidas de fontes naturais que se renovam constantemente.'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        d.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        d.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('false')
        d.classList.add('true')

    })
    d.addEventListener('click',()=>{
        d.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            d.classList.remove('true')
            questions7()
            a.classList.remove('false')
            b.classList.remove('false')
            c.classList.remove('false')
        },1500)
    })
}
function questions7(){
    question.innerText = 'Qual é o impacto da poluição do ar na saúde humana?'
    a.innerText = 'A: Menor insidencia de raios solares.'
    b.innerText = 'B: Aumento de doenças autoimunes.'
    c.innerText = 'C: Aumento de problemas respiratórios e cardiovasculares.'
    d.innerText = 'D: Aumento de problemas de pele'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions8()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}
function questions8(){
    question.innerText = 'Where is the capital of Azerbaijan?'
    a.innerText = 'A: Ujar'
    b.innerText = 'B: Lerik'
    c.innerText = 'C: Baku'
    d.innerText = 'D: Sumgait'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions9()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}
function questions9(){
    question.innerText = 'Where is the capital of Azerbaijan?'
    a.innerText = 'A: Ujar'
    b.innerText = 'B: Lerik'
    c.innerText = 'C: Baku'
    d.innerText = 'D: Sumgait'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions10()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}
function questions10(){
    question.innerText = 'Where is the capital of Azerbaijan?'
    a.innerText = 'A: Ujar'
    b.innerText = 'B: Lerik'
    c.innerText = 'C: Baku'
    d.innerText = 'D: Sumgait'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions11()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}
function questions11(){
    question.innerText = 'Where is the capital of Azerbaijan?'
    a.innerText = 'A: Ujar'
    b.innerText = 'B: Lerik'
    c.innerText = 'C: Baku'
    d.innerText = 'D: Sumgait'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions12()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}
function questions12(){
    question.innerText = 'Where is the capital of Azerbaijan?'
    a.innerText = 'A: Ujar'
    b.innerText = 'B: Lerik'
    c.innerText = 'C: Baku'
    d.innerText = 'D: Sumgait'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions13()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}
function questions13(){
    question.innerText = 'Where is the capital of Azerbaijan?'
    a.innerText = 'A: Ujar'
    b.innerText = 'B: Lerik'
    c.innerText = 'C: Baku'
    d.innerText = 'D: Sumgait'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions14()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}
function questions14(){
    question.innerText = 'Where is the capital of Azerbaijan?'
    a.innerText = 'A: Ujar'
    b.innerText = 'B: Lerik'
    c.innerText = 'C: Baku'
    d.innerText = 'D: Sumgait'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions15()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}
function questions15(){
    question.innerText = 'Where is the capital of Azerbaijan?'
    a.innerText = 'A: Ujar'
    b.innerText = 'B: Lerik'
    c.innerText = 'C: Baku'
    d.innerText = 'D: Sumgait'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        prize.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            questions16()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}


questions()