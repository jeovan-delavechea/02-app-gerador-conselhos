const botaoDeMudanca = document.getElementById('botao')
const idDoConselho = document.querySelector('.aviso')
const descricaoDoConselho = document.querySelector('.descricao')


botaoDeMudanca.addEventListener('click', () =>{
    return selecionarPeloId()
})

async function criarGeradorDeConselhos(){
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    return await resposta.json() 
}

async function selecionarPeloId(){
    const geradorDeConselho = await criarGeradorDeConselhos()
    const idEDescricao = await geradorDeConselho.slip
    
    idDoConselho.innerText = `ADVICE #${idEDescricao.id}`
    
    descricaoDoConselho.innerText = `"${idEDescricao.advice}"`
}
selecionarPeloId()

    
