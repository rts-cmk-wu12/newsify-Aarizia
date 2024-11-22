const NewsService = require('./new-york-times-api');

async function generateMainPopular() {
    const data = await NewsService.fetchMostPopularByView();
    console.log(data);

    // generer det evt på samme måde som i vinterprojektet, men forhold dig til om det skal filtreres først
}

module.exports = generateMainPopular;