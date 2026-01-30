// ARQUIVO DE CONFIGURAÇÃO - CROCKS FRIO
// Edite os textos e preços aqui. Mantenha as aspas e vírgulas.

const MENU_DATA = {
    // =========================================
    // PAGINA 1: SORVETES
    // =========================================
    sorvetes: {
        titulo: "Sorvetes Artesanais",
        itens: [
            { 
                nome: "Mini", 
                preco: "11,90", 
                desc: "1 Bola (aprox. 90g). Tamanho perfeito para um desejo rápido.",
                destaque: false 
            },
            { 
                nome: "Clássico", 
                preco: "18,90", 
                desc: "2 Bolas (aprox. 180g). A dupla perfeita de sabores.",
                destaque: true, // Se true, mostra "MAIS PEDIDO"
                tag: "MAIS PEDIDO"
            },
            { 
                nome: "Master", 
                preco: "27,90", 
                desc: "3 Bolas (aprox. 270g). Três bolas de felicidade!",
                destaque: false 
            },
            { 
                nome: "Extra Premium", 
                preco: "35,90", 
                desc: "4 Bolas (aprox. 360g). Experiência inesquecível.",
                destaque: false 
            }
        ],
        // Imagens dos serviços (coloque as fotos na pasta main)
        servicos: [
            { nome: "Pote", preco: "Incluso", img: "main/servico_pote.jpg", obs: "(padrão)" },
            { nome: "Pote + Casq.", preco: "+R$ 0,99", img: "main/servico_misto.jpg", obs: "" },
            { nome: "Cestinha", preco: "+R$ 2,30", img: "main/servico_cestinha.jpg", obs: "" },
            { nome: "Cascão", preco: "+R$ 1,90", img: "main/servico_cascao.jpg", obs: "" }
        ]
    },

    // =========================================
    // PAGINA 2: CAFÉS E SALGADOS
    // =========================================
    cafeteria: {
        titulo: "Cafeteria",
        itens: [
            { nome: "Expresso (30ml)", preco: "8,90", desc: "Grão especial + Shot água com gás" },
            { nome: "Café Latte (150ml)", preco: "13,90", desc: "Leite cremoso vaporizado com expresso" },
            { nome: "Cappuccino Cremoso", preco: "16,90", desc: "Leite vaporizado, pó, canela" },
            { nome: "Affogato", preco: "19,90", desc: "Sorvete Baunilha/Creme + Expresso", icone: "star" }
        ],
        extra: "Chás Especiais (Quente/Gelado) - R$ 4,90"
    },
    salgados: {
        titulo: "Salgados",
        itens: [
            { nome: "Mini Croissants (2un)", preco: "5,90" },
            { nome: "Croissant Simples", preco: "9,90" },
            { nome: "Croissant Peito Peru/Qj", preco: "16,90" },
            { nome: "Croissant Carne c/ Req", preco: "21,90" },
        ],
        destaques: [
            { nome: "Pão de Queijo (2un)", preco: "9,90", icone: "bread-slice" },
            { nome: "Coxinha c/ Req.", preco: "9,90" }
        ]
    },

    // =========================================
    // PAGINA 3: DOCES
    // =========================================
    doces: {
        titulo: "Doces & Sobremesas",
        milkshake: {
            titulo: "Milkshakes",
            desc: "Escolha até dois sabores de sorvete!",
            p: { tamanho: "300ml (270g)", preco: "27,90" },
            g: { tamanho: "500ml (450g)", preco: "39,90" }
        },
        petit_gateau: {
            titulo: "Petit Gateau",
            desc: "Clássico bolinho quente com sorvete.",
            preco: "24,90",
            img_fundo: "main/petit_bg.jpg" // Nome da imagem de fundo se tiver
        },
        outros: [
            { 
                titulo: "Fatias de Torta", 
                desc: "Limão, Alemã, Cheesecake", 
                preco: "19,90",
                cor: "red" 
            },
            { 
                titulo: "Cookies & Brownies", 
                itens: [
                    { nome: "Cookie Belga", preco: "8,90" },
                    { nome: "Brownie", preco: "8,90" }
                ],
                cor: "amber"
            },
            { 
                titulo: "Ring Donuts", 
                desc: "Chocolate ou Frutas Vermelhas", 
                preco: "16,90",
                cor: "purple" 
            }
        ]
    }
};