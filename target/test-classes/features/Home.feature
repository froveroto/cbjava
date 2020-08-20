#language:pt

@addproduto
Funcionalidade: Adicionar produto ao carrinho
  Como cliente das Casas Bahia
  Quero adicionar um produto no carrinho
  Para reservar meu produto
     
    Esquema do Cenario: Cliente Casas Bahia adiciona produto ao carrinho
    	Dado que sou Cliente Casas Bahia
    	Quando eu adicionar "<item>"
    	Entao o produto "<item>" sera reservado no carrinho

      Exemplos:
      |item     |
      |iPhone XR|