const botaoDeMudanca = document.getElementById('botao')
const idDoConselho = document.querySelector('.aviso')
const descricaoDoConselho = document.querySelector('.descricao')


botaoDeMudanca.addEventListener('click', () => selecionarPeloSlip())


async function selecionarPeloSlip(){
    const resposta = await fetch ('https://api.adviceslip.com/advice')
    const geradorDeConselho = await resposta.json()
    const idEDescricao = await geradorDeConselho.slip
    
    idDoConselho.innerText = `ADVICE #${idEDescricao.id}`
    descricaoDoConselho.innerText = `"${idEDescricao.advice}"`
}
selecionarPeloSlip()

