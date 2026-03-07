export default async function handler(req, res) {
    // ID do seu local no Google (Crocks Frio)
    const placeId = process.env.GOOGLE_PLACE_ID || "ChIJ876mKjS1lZUR3-4eT5O1lZU";
    
    // A chave deve ser configurada nas Environment Variables (Variáveis de Ambiente) do Vercel
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: "A chave da API do Google Maps não está configurada no Vercel." });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,name,rating&lang=pt-BR&reviews_sort=newest&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== "OK") {
            return res.status(400).json({ error: `Erro Google: ${data.status}` });
        }

        const google_reviews = data.result?.reviews || [];
        
        // Filtrar e formatar apenas as avaliações 5 estrelas
        const lista_novas = google_reviews
            .filter(r => r.rating === 5)
            .map(r => ({
                nome: r.author_name,
                texto: r.text || "Excelente atendimento e qualidade!",
                estrelas: r.rating,
                foto_perfil: r.profile_photo_url,
                data_relativa: r.relative_time_description
            }));

        // MAGIA DO VERCEL: Cache na CDN por 1 hora (3600 segundos).
        // Evita estourar o limite de requisições da API do Google Maps!
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        
        // Retorna o array pronto para o frontend
        return res.status(200).json(lista_novas);

    } catch (error) {
        console.error("Erro ao buscar avaliações:", error);
        return res.status(500).json({ error: "Erro interno no servidor ao tentar contactar o Google." });
    }
}