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
                preco: "49,90"
            },
            {
                nome: "Clássico Crocks",
                desc: "1x Clássico + Cookie ou Brownie",
                preco_de: "27,80",
                preco: "25,90"
            },
            {
                nome: "Frio & Expresso",
                desc: "1x Café + 1x Clássico",
                preco_de: "27,80",
                preco: "24,90"
            }
        ]
    },
    sorvetes: {
        titulo: "Sorvetes Artesanais",
        itens: [
            {
                nome: "Mini",
                desc: "1 Bola (90g). Desejo rápido e delicioso.",
                preco: "10,90",
                tamanho_fonte: "0.95rem",
                destaque: false
            },
            {
                nome: "Clássico",
                desc: "2 Bolas (180g). A dupla perfeita de sabores.",
                preco: "18,90",
                tamanho_fonte: "0.95rem",
                destaque: true,
                tag: "O MAIS PEDIDO"
            },
            {
                nome: "Master",
                desc: "3 Bolas (270g). Três bolas de pura felicidade!",
                preco: "27,90",
                tamanho_fonte: "0.95rem",
                destaque: false
            },
            {
                nome: "Extra Premium",
                desc: "4 Bolas (360g). Experiência inesquecível de sabor.",
                preco: "35,90",
                tamanho_fonte: "0.95rem",
                destaque: false
            }
        ],
        servicos: [
            { nome: "Pote", preco: "Padrão", img: "main/pote.jpg" },
            { nome: "Pote + Casquinha", preco: "+R$ 0,99", img: "main/potecasquinho.jpg" },
            { nome: "Cestinha", preco: "+R$ 2,30", img: "main/cestinha.jpg" },
            { nome: "Cascão", preco: "+R$ 1,90", img: "main/cascao.jpg" }
        ]
    },
    cafeteria: {
        titulo: "Cafés & Chás",
        extra: "Grãos selecionados e moídos na hora",
        itens: [
            {
                nome: "Affogato",
                desc: "Nossa Especialidade! Sorvete + Expresso.",
                preco: "19,90",
                tamanho_fonte: "0.9rem"
            },
            {
                nome: "Expresso",
                desc: "Grão especial + Shot água com gás.",
                preco: "8,90",
                tamanho_fonte: "0.9rem"
            },
            {
                nome: "Cappuccino Cremoso",
                desc: "Leite vaporizado, pó de preparo e canela.",
                preco: "16,90",
                tamanho_fonte: "0.9rem"
            },
            {
                nome: "Mocaccino",
                desc: "Chocolate, leite vaporizado e expresso.",
                preco: "17,90",
                tamanho_fonte: "0.9rem"
            }
        ]
    },
    salgados: {
        titulo: "Delícias Salgadas",
        itens: [
            { nome: "Mini Croissants (2 und)", preco: "R$ 5,90" },
            { nome: "Mini Croissants c/ Req (2 und)", preco: "R$ 6,90" },
            { nome: "Coxinha de Frango", preco: "R$ 8,90" },
            { nome: "Coxinha c/ Requeijão", preco: "R$ 9,90" },
            { nome: "Pão de Queijo (2 und)", preco: "R$ 9,90" }
        ],
        destaques: [
            { nome: "Croissants Simples", preco: "R$ 9,90" },
            { nome: "Croissant Peito de Peru c/ Queijo", preco: "16,90" },
            { nome: "Croissant Frango c/ Requeijão", preco: "18,90" },
            //{ nome: "Croissant Carne c/ Requeijão", preco: "21,90" },
            { nome: "Croissant Peito Peru c/ Queijo do Reino", preco: "22,90" },
            { nome: "Croissant Queijo do Reino", preco: "23,90" }
        ]
    },
    doces: {
        titulo: "Sobremesas & Doces",
        destaques_extra: {
            titulo: "Combos em Destaque",
            itens: [
                { nome: "Alegria a Dois", preco: "49,90", desc: "2x Clássico + 1 Fatia de Torta" },
                { nome: "Clássico Crocks", preco: "25,90", desc: "1x Clássico + Cookie ou Brownie" }
            ]
        },
        milkshake: {
            titulo: "Milkshakes",
            desc: "Cremosos e Artesanais",
            p: { tamanho: "300ml (270g)", preco: "27,90" },
            g: { tamanho: "500ml (450g)", preco: "39,90" }
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
                cor: "teal",
                itens: [
                    { nome: "Cookie Belga", preco: "8,90" },
                    { nome: "Brownie", preco: "8,90" },
                    { nome: "Big Cookie Chocolatudo", preco: "13,90" }
                ]
            },
            {
                titulo: "Tortas (Fatias)",
                cor: "pink",
                itens: [
                    { nome: "Alemã", preco: "19,90" },
                    { nome: "Limão", preco: "19,90" },
                    { nome: "Cheesecake", preco: "19,90" }
                ]
            },
            {
                titulo: "Bebidas",
                cor: "orange",
                itens: [
                    { nome: "Água S/ Gás", preco: "4,90" },
                    { nome: "Água C/ Gás", preco: "5,90" },
                    { nome: "Refrigerantes", preco: "6,90" }
                ]
            }
        ]
    }
};