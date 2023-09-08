// Selecionar elementos do DOM
const inputPrecoUnitario = document.getElementById('precoUnitario');
const inputQuantidade = document.getElementById('quantidade');
const buttonCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

// Adicionar ouvinte de evento ao botão
buttonCalcular.addEventListener('click' ,  function() {
        // Obter os valores do preço unitário e da quantidade
const precoUnitario = parseFloat(inputPrecoUnitario.value);
const quantidade = parseInt(inputQuantidade.value);

    // Verificar se os valores são válidos
if (isNaN(precoUnitario) || isNaN(quantidade) || precoUnitario<= 0 ||quantidade <= 0) {
    resultado.textContent = 'Por favor, insira valores válidos.';    
} else {
    // Calcular o preço total
    const precoTotal = precoUnitario * quantidade;
    // Exibir o resultado
    resultado.textContent = 'O valor total da compra é: R$ ' + precoTotal.toFixed(2);
}
});
