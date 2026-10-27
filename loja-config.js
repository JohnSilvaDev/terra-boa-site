/* =====================================================================
   TERRA BOA · CONFIGURAÇÃO DA LOJA
   Um arquivo só, carregado por todas as páginas. Quem for publicar o
   site mexe aqui e em mais nenhum lugar.

   ---------------------------------------------------------------------
   PROVISORIO · TUDO QUE AINDA NÃO É DEFINITIVO NO SITE
   (a palavra PROVISORIO marca cada um desses pontos no código)

   1. PROVISORIO · produtos do pedido: a lista inteira de produtos.js é
      de exemplo, criada para exercitar o desenho. Trocar antes de subir.
   2. PROVISORIO · preços: os preços de produtos.js são inventados. Com
      TB_PRECOS_DE_EXEMPLO em false, nenhum aparece na tela.
   3. PROVISORIO · promoções: a lista de Promocoes.dc.html é de exemplo,
      e a data abaixo acompanha ela.
   4. PROVISORIO · fotos que faltam: retrato do Gilberto, retrato do
      funcionário que está há 35 anos e o diploma de perto. A seção
      "quem te atende" já está montada com as molduras no lugar: quando
      as fotos chegarem, é trocar o src e mais nada.
   5. PROVISORIO · artigos: os 5 textos aguardam a revisão do veterinário.
      As lacunas de número estão listadas no topo de artigos.js.
   6. PROVISORIO · WhatsApp: confirmar qual dos dois números é o oficial.
   7. PROVISORIO · história da loja: não existe seção de história. Os
      marcos estão em 32 áudios que ainda não foram ouvidos, e data de
      loja não se inventa.
   ===================================================================== */

/* Chave 1. Pedido pelo site.
   true  mostra todas as portas de entrada (menu, frentes, promoções)
   false esconde todas de uma vez. */
window.TB_PEDIDO_ATIVO = true;

/* Chave 2. PROVISORIO · preços de exemplo.
   false  todo item mostra "valor no WhatsApp", e a prévia fica sem
          nenhum número inventado na tela.
   true   mostra os preços de exemplo de produtos.js. */
window.TB_PRECOS_DE_EXEMPLO = false;

/* Contato */
window.TB_WHATSAPP = '5564984341168';          /* PROVISORIO · confirmar o número oficial */
window.TB_WHATSAPP_VISIVEL = '(64) 98434-1168';
window.TB_INSTAGRAM = 'terraboa3';

/* Endereço e horário */
window.TB_ENDERECO = 'Av. Tocantins, 1.600, Setor Leste';
window.TB_CIDADE = 'Anicuns';
window.TB_UF = 'GO';
window.TB_HORARIO = [
  { dias: 'Segunda a sexta', horas: '7h às 18h' },
  { dias: 'Sábado', horas: '7h às 13h' }
];

/* As cidades atendidas ficam neste lugar só. */
window.TB_CIDADES = ['Anicuns', 'Americana do Brasil', 'Avelinópolis', 'Adelândia', 'Nazário', 'Turvânia'];

/* =====================================================================
   09/10/2026 · AS OFERTAS NÃO MORAM MAIS AQUI.
   A home pergunta ao sistema (/api/destaques) o que o Gilberto marcou em
   "A loja → Destaques", com a foto do item. A lista de exemplo que ficava
   aqui (quatro ofertas inventadas em agosto) saiu de vez: um cliente podia
   chegar na loja pedindo "a oferta do site". Decisão do Brian, DECISOES.md.
   As duas chaves continuam existindo, vazias, pra ninguém que as leia quebrar.
   ===================================================================== */
window.TB_PROMOS_ATUALIZADO = '';
window.TB_PROMOS = [];
