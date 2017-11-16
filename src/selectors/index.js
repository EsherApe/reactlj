export function filtrateArticles(state) {
    const {selected, dateRange: {from, to}} = filters;

    const filteredArticles = articles.filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.includes(article.id)) && (!from || !to || (published > from && published < to))
    });
}