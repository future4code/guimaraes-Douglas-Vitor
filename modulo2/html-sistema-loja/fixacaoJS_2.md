```
function calculaPrecoTotal(quantidade) {
  let minhaCompra = 0
  if(quantidade < 12) {
   minhaCompra = quantidade * 1.3
  }else{
   minhaCompra = quantidade
  }
  return minhaCompra
}
```