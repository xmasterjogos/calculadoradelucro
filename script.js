function calcularLucro() {
    const custo = document.getElementById("custo").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    
    const lucro = (preco - custo) * quantidade;
    
    alert(`O lucro é de R$ ${lucro.toFixed(2)}`);
  }
  
