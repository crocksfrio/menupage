export default async function handler(req, res) {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey  = process.env.GOOGLE_MAPS_API_KEY;

    if (!apiKey)  return res.status(500).json({ error: "GOOGLE_MAPS_API_KEY não configurada no Vercel." });
    if (!placeId) return res.status(500).json({ error: "GOOGLE_PLACE_ID não configurado no Vercel." });

    // reviews_no_translation=true: retorna o texto original sem tradução automática do Google
    const url = `https://maps.googleapis.com/maps/api/place/details/json`
              + `?place_id=${placeId}`
              + `&fields=reviews,name,rating`
              + `&language=pt-BR`
              + `&reviews_sort=newest`
              + `&reviews_no_translation=true`
              + `&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data     = await response.json();

        if (data.status !== "OK") {
            return res.status(400).json({ error: `Erro Google: ${data.status}` });
        }

        const google_reviews = data.result?.reviews || [];

        // Filtra: 5 estrelas E com texto (ignora avaliações sem comentário)
        const lista = google_reviews
            .filter(r => r.rating === 5 && r.text && r.text.trim().length > 0)
            .map(r => ({
                nome:           r.author_name,
                texto:          r.text.trim(),
                estrelas:       r.rating,
                foto_perfil:    r.profile_photo_url || null,
                data_relativa:  r.relative_time_description
            }));

        // Cache na CDN do Vercel por 1 hora — evita estourar a cota da Google Maps API
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

        return res.status(200).json(lista);

    } catch (error) {
        console.error("Erro ao buscar avaliações:", error);
        return res.status(500).json({ error: "Erro interno ao contactar o Google." });
    }
}
