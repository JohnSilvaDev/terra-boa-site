# Site da Terra Boa

Este é o site que aparece em terraboagro.com.br. Ele é seu: pode mudar textos, fotos e o desenho quando quiser. Cada alteração salva aqui no GitHub vai para o ar sozinha em um ou dois minutos.

O sistema da loja (vendas, clientes, fiado, vacinas) fica em outro lugar, em sistema.terraboagro.com.br, e não muda quando você mexe no site.

## Onde fica cada coisa

- `index.html`: a página inteira, com os textos.
- `assets/fotos` e `assets/marca`: as fotos e o logotipo. Para trocar uma foto, suba a nova com o mesmo nome, ou mude o nome no `index.html`.
- `loja-config.js`: as cidades atendidas e o horário reserva.

## Duas coisas que ligam o site ao sistema

1. **Promoções da semana e horário.** O site busca no sistema o que o Gilberto marca em "Produtos e site". É a parte do `index.html` que tem `sistema.terraboagro.com.br/api/destaques` e `/api/horario`. Se você apagar esse trecho, o site continua funcionando, mas as promoções e o horário param de atualizar sozinhos.
2. **O arquivo `vercel.json`.** Ele leva para o sistema quem abre um link antigo, como a carteirinha de vacina que o cliente recebeu no WhatsApp. Não apague esse arquivo, senão esses links param de abrir.

Na dúvida, fale com o Brian antes de mexer nessas duas partes.
