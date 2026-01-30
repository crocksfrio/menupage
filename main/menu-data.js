/**
 * CONFIGURAÇÃO DO CARDÁPIO - CROCKS FRIO
 * Engenharia de cardápio aplicada com base no documento oficial.
 * Ajustado para escala de 32" para evitar quebras de texto.
 */

const MENU_DATA = {
    combos: {
        titulo: "Combos Especiais",
        itens: [
            {
                nome: "Alegria a Dois",
                desc: "2x Clássico + 1 Fatia de Torta",
                preco_de: "57,70",
                preco: "49,90",
                tamanho_fonte: "1rem"
            },
            {
                nome: "Clássico Crocks",
                desc: "1x Clássico + Cookie ou Brownie",
                preco_de: "27,80",
                preco: "25,90",
                tamanho_fonte: "1rem"
            }
        ]
    },
    sorvetes: {
        titulo: "Sorvetes Artesanais",
        itens: [
            {
                nome: "Mini",
                desc: "1 Bola (90g). Desejo rápido e delicioso.",
                preco: "11,90",
                tamanho_fonte: "1.1rem",
                destaque: false
            },
            {
                nome: "Clássico",
                desc: "2 Bolas (180g). A dupla perfeita de sabores.",
                preco: "18,90",
                tamanho_fonte: "1.1rem",
                destaque: true,
                tag: "O MAIS PEDIDO"
            },
            {
                nome: "Master",
                desc: "3 Bolas (270g). Três bolas de pura felicidade!",
                preco: "27,90",
                tamanho_fonte: "1.1rem",
                destaque: false
            },
            {
                nome: "Extra Premium",
                desc: "4 Bolas (360g). Experiência inesquecível de sabor.",
                preco: "35,90",
                tamanho_fonte: "1.1rem",
                destaque: false
            }
        ],
        servicos: [
            { nome: "Pote (padrão)", preco: "Incluso", img: "main/pote.jpg" },
            { nome: "Pote + Casquinho", preco: "+R$ 0,99", img: "main/potecasquinho.jpg" },
            { nome: "Cestinha de Biscoito", preco: "+R$ 2,30", img: "main/cestinha.jpg" },
            { nome: "Cascão de Biscoito", preco: "+R$ 1,90", img: "main/cascao.jpg" }
        ]
    },
    cafeteria: {
        titulo: "Cafeteria",
        extra: "Grãos selecionados e moídos na hora",
        itens: [
            {
                nome: "Expresso",
                desc: "Curto ou Longo (50ml). Intenso.",
                preco: "7,50",
                tamanho_fonte: "1rem",
                icone: "coffee"
            },
            {
                nome: "Expresso c/ Chantilly",
                desc: "O clássico com toque de cremosidade.",
                preco: "10,90",
                tamanho_fonte: "1rem"
            },
            {
                nome: "Cappuccino",
                desc: "Leite vaporizado, pó de preparo e canela.",
                preco: "16,90",
                tamanho_fonte: "1rem",
                icone: "mug-hot"
            },
            {
                nome: "Mocaccino",
                desc: "Chocolate, leite vaporizado e expresso.",
                preco: "17,90",
                tamanho_fonte: "1rem"
            }
        ]
    },
    salgados: {
        titulo: "Delícias Salgadas",
        itens: [
            { nome: "Coxinha de Frango", preco: "8,90" },
            { nome: "Coxinha c/ Requeijão", preco: "9,90" },
            { nome: "Pão de Queijo (2 und)", preco: "9,90" },
            { nome: "Mini Croissants (2 und)", preco: "5,90" },
            { nome: "Croissant Simples", preco: "9,90" }
        ],
        destaques: [
            { nome: "Croissant Frango / Requeijão", preco: "18,90", icone: "bread-slice" },
            { nome: "Croissant Carne / Requeijão", preco: "21,90", icone: "utensils" },
            { nome: "Croissant Queijo do Reino", preco: "23,90", icone: "cheese" }
        ]
    },
    doces: {
        titulo: "Sobremesas & Doces",
        milkshake: {
            titulo: "Milkshake Crocks",
            desc: "Ultra cremoso com sorvete artesanal",
            p: { tamanho: "300ml", preco: "19,90" },
            g: { tamanho: "500ml", preco: "25,90" }
        },
        petit_gateau: {
            titulo: "Petit Gâteau",
            desc: "Bolinho quente com recheio cremoso e uma bola de sorvete.",
            preco: "24,90",
            tamanho_fonte: "0.95rem",
            img_fundo: "main/petitgateau.jpg"
        },
        outros: [
            {
                titulo: "Cookies & Brownies",
                desc: "Receita exclusiva Crocks",
                cor: "teal",
                itens: [
                    { nome: "Cookie Belga", preco: "12,90" },
                    { nome: "Brownie Tradicional", preco: "13,90" }
                ],
                tamanho_fonte: "1.95rem"
            },
            {
                titulo: "Tortas Finas",
                desc: "Fatias selecionadas",
                cor: "pink",
                preco: "16,90",
                tamanho_fonte: "1.95rem"
            },
            {
                titulo: "Chás (150ml)",
                desc: "Quente ou Gelado",
                cor: "orange",
                preco: "4,90",
                tamanho_fonte: "1.95rem"
            }
        ]
    }
};