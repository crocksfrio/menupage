/**
 * CONFIGURAÇÃO DO CARDÁPIO - CROCKS FRIO
 * Você pode ajustar preços, nomes e o TAMANHO DA FONTE de cada descrição.
 * Use unidades como '14px', '1rem' ou '0.9rem'.
 */

const MENU_DATA = {
    sorvetes: {
        titulo: "Sorvetes Artesanais",
        itens: [
            {
                nome: "Mini",
                desc: "1 Bola (Aprox. 90g). O tamanho perfeito para um desejo rápido e delicioso.",
                preco: "10,90",
                tamanho_fonte: "0.95rem",
                destaque: false
            },
            {
                nome: "Clássico",
                desc: "2 Bolas (Aprox. 180g). A dupla perfeita para combinar sabores.",
                preco: "18,90",
                tamanho_fonte: "1rem",
                destaque: true,
                tag: "O MAIS PEDIDO"
            },
            {
                nome: "Master",
                desc: "3 Bolas (Aprox. 270g). Três bolas de pura felicidade para sua tarde!",
                preco: "27,90",
                tamanho_fonte: "0.95rem",
                destaque: false
            },
            {
                nome: "Extra Premium",
                desc: "4 Bolas (Aprox. 360g). Uma experiência inesquecível de sabor e textura.",
                preco: "35,90",
                tamanho_fonte: "0.95rem",
                destaque: false
            }
        ],
        servicos: [
            { nome: "Cascão", preco: "R$ 5,50", img: "main/cascao.jpg" },
            { nome: "Casquinha", preco: "R$ 3,50", img: "main/casquinha.jpg" },
            { nome: "Cestinha", preco: "R$ 6,50", img: "main/cestinha.jpg" },
            { nome: "Cobertura", preco: "R$ 3,00", img: "main/cobertura.jpg" }
        ]
    },
    cafeteria: {
        titulo: "Cafeteria",
        extra: "Grãos selecionados e moídos na hora",
        itens: [
            {
                nome: "Expresso",
                desc: "Curto ou Longo. Intenso e encorpado.",
                preco: "7,50",
                tamanho_fonte: "1rem",
                icone: "coffee"
            },
            {
                nome: "Cappuccino",
                desc: "Leite vaporizado, café expresso e canela.",
                preco: "14,90",
                tamanho_fonte: "0.9rem",
                icone: "mug-hot"
            },
            {
                nome: "Chocolate Quente",
                desc: "Cremoso e reconfortante para dias frios.",
                preco: "13,90",
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
        titulo: "Salgados",
        itens: [
            { nome: "Coxinha de Frango", preco: "8,90" },
            { nome: "Coxinha c/ Requeijão", preco: "9,90" },
            { nome: "Pão de Queijo (2 und)", preco: "9,90" },
            { nome: "Croissant Simples", preco: "9,90" }
        ],
        destaques: [
            { nome: "Croissant de Frango", preco: "18,90", icone: "bread-slice" },
            { nome: "Croissant Carne", preco: "21,90", icone: "utensils" }
        ]
    },
    doces: {
        titulo: "Sobremesas & Doces",
        milkshake: {
            titulo: "Milkshake Crocks",
            desc: "Bebida ultra cremosa feita com nosso sorvete artesanal",
            p: { tamanho: "300ml", preco: "19,90" },
            g: { tamanho: "500ml", preco: "25,90" }
        },
        petit_gateau: {
            titulo: "Petit Gâteau",
            desc: "Bolinho quente de chocolate com recheio cremoso, servido com uma bola de sorvete à sua escolha.",
            preco: "24,90",
            tamanho_fonte: "1.05rem",
            img_fundo: "main/petit-gateau-bg.jpg"
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
                tamanho_fonte: "0.85rem"
            },
            {
                titulo: "Tortas Finas",
                desc: "Fatias selecionadas",
                cor: "pink",
                preco: "16,90",
                tamanho_fonte: "0.9rem"
            },
            {
                titulo: "Chás Especiais",
                desc: "Quente ou Gelado",
                cor: "orange",
                itens: [
                    { nome: "Hibisco / Verde", preco: "4,90" },
                    { nome: "Morango / Laranja", preco: "4,90" }
                ],
                tamanho_fonte: "0.85rem"
            }
        ]
    }
};