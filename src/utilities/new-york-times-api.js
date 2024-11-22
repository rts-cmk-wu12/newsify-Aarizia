class NewsService {

    static API_KEY = 'AEeiWFHvgcD8JZzsbz7WDqZ6AHlPu5MA';
    static BASE_URL = 'https://api.nytimes.com/svc/'
    static endpoints = {
        // indexCategoryForeign: 'search/v2/articlesearch.json?q=foreign',
        // indexCategoryHealth: 'search/v2/articlesearch.json?q=health',
        // indexCategorySport: 'search/v2/articlesearch.json?q=sport',
        // indexCategoryBusiness: 'search/v2/articlesearch.json?q=business',
        // indexCategoryTravel: 'search/v2/articlesearch.json?q=travel',
        indexCategory: 'search/v2/articlesearch.json',
        mostPopularByViews: 'mostpopular/v2/viewed/'
    }

    static async fetchIndexCategory(category) {

        const url = `${NewsService.BASE_URL}${NewsService.endpoints.indexCategory}`;

        const urlObject = new URL(url);

        urlObject.searchParams.set('api-key', NewsService.API_KEY);
        urlObject.searchParams.set('q', category)
        console.log(urlObject);

        //nyt fetch
        const response = await fetch(urlObject);

        // lokal fetch
        //const response = await fetch('./index-foreign.json');

        if (!response.ok) {
            throw new Error('Network problems');
        }

        const data = await response.json();

        const newsifyData = [];
        console.log(data)

        data.response.docs.forEach(result => {
            newsifyData.push({
                title: result.headline.main,
                abstract: result.abstract,
                imageSource: result?.multimedia[0]?.url,
                url: result.web_url
            });
        })

        //return data.response.docs;
        return newsifyData;

    }

    // static async fetchIndexCategoryHealth() {
    //     //const url  = new URL(NewsService.BASE_URL + NewsService.endpoints.indexCategoryEurope);

    //     //url.searchParams.set('api-key', NewsService.API_KEY);

    //     const url = `${NewsService.BASE_URL}${NewsService.endpoints.indexCategoryHealth}&api-key=${NewsService.API_KEY}`;

    //     //console.log(url);

    //     //nyt fetch
    //     //const response = await fetch(url);

    //     // lokal fetch
    //     const response = await fetch('./index-health.json');

    //     if (!response.ok) {
    //         throw new Error('Netword problems');
    //     }

    //     const data = await response.json();

    //     const newsifyData = [];

    //     data.response.docs.forEach(result => {
    //         newsifyData.push({
    //             title: result.headline.main,
    //             abstract: result.abstract,
    //             imageSource: result.multimedia[0].url,
    //             url: result.web_url
    //         });
    //     })
    //     //return data.response.docs;
    //     return newsifyData;

    // }

    // static async fetchIndexCategorySport() {
    //     //const url  = new URL(NewsService.BASE_URL + NewsService.endpoints.indexCategoryEurope);

    //     //url.searchParams.set('api-key', NewsService.API_KEY);

    //     const url = `${NewsService.BASE_URL}${NewsService.endpoints.indexCategorySport}&api-key=${NewsService.API_KEY}`;

    //     //console.log(url);

    //     //nyt fetch
    //     //const response = await fetch(url);

    //     // lokal fetch
    //     const response = await fetch('./index-sport.json');

    //     if (!response.ok) {
    //         throw new Error('Netword problems');
    //     }

    //     const data = await response.json();

    //     const newsifyData = [];

    //     data.response.docs.forEach(result => {
    //         newsifyData.push({
    //             title: result.headline.main,
    //             abstract: result.abstract,
    //             imageSource: result.multimedia[0].url,
    //             url: result.web_url
    //         });
    //     })
    //     //return data.response.docs;
    //     return newsifyData;

    // }

    // static async fetchIndexCategoryBusiness() {
    //     //const url  = new URL(NewsService.BASE_URL + NewsService.endpoints.indexCategoryEurope);

    //     //url.searchParams.set('api-key', NewsService.API_KEY);

    //     const url = `${NewsService.BASE_URL}${NewsService.endpoints.indexCategoryBusiness}&api-key=${NewsService.API_KEY}`;

    //     //console.log(url);

    //     //nyt fetch
    //     //const response = await fetch(url);

    //     // lokal fetch
    //     const response = await fetch('./index-business.json');

    //     if (!response.ok) {
    //         throw new Error('Netword problems');
    //     }

    //     const data = await response.json();

    //     const newsifyData = [];

    //     data.response.docs.forEach(result => {
    //         newsifyData.push({
    //             title: result.headline.main,
    //             abstract: result.abstract,
    //             imageSource: result.multimedia[0].url,
    //             url: result.web_url
    //         });
    //     })
    //     //return data.response.docs;
    //     return newsifyData;

    // }

    // static async fetchIndexCategoryTravel() {
    //     //const url  = new URL(NewsService.BASE_URL + NewsService.endpoints.indexCategoryEurope);

    //     //url.searchParams.set('api-key', NewsService.API_KEY);

    //     const url = `${NewsService.BASE_URL}${NewsService.endpoints.indexCategoryTravel}&api-key=${NewsService.API_KEY}`;

    //     //console.log(url);

    //     //nyt fetch
    //     //const response = await fetch(url);

    //     // lokal fetch
    //     const response = await fetch('./index-travel.json');

    //     if (!response.ok) {
    //         throw new Error('Netword problems');
    //     }

    //     const data = await response.json();

    //     const newsifyData = [];

    //     data.response.docs.forEach(result => {
    //         newsifyData.push({
    //             title: result.headline.main,
    //             abstract: result.abstract,
    //             imageSource: result.multimedia[0].url,
    //             url: result.web_url
    //         });
    //     })
    //     //return data.response.docs;
    //     return newsifyData;

    // }

    static async fetchMostPopularByView(days = 1) {

        const url = new URL(`${days}.json`, NewsService.BASE_URL + NewsService.endpoints.mostPopularByViews);

        url.searchParams.set('api-key', NewsService.API_KEY);

        // det her er den kode, der fetcher fra nyt
        //const response = await fetch(url);

        // det her er den kode, der fetcher fra lokal
        const response = await fetch('./popular-news.json')

        if (!response.ok) {
            throw new Error('Network problems');
            // kig evt ind i fejlkoder for at skrive mere specifikke fejlbeskeder
        }
        
        const data = await response.json();

        const newsifyData = [];

        //console.log(data)
        
        data.results.forEach(result => {
            newsifyData.push({
                title: result.title,
                abstract: result.abstract,
                category: result.section,
                imageSource: result.media[0]['media-metadata'][0].url,
                url: result.url
            });
        });

        return newsifyData;

    }
}

module.exports = NewsService;