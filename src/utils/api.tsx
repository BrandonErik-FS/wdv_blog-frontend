import formatDate from '@/utils/formatDate';
import markdownToHtml from '@/utils/markdownToHtml';

export const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const REVALIDATION_OPTIONS = {next: {revalidate: 3600}}

export const getArticle = async (slug: string) => {
    const ARTICLE_ENDPOINT = API_URL + `/api/articles/${slug}`;

    const query = await fetch(ARTICLE_ENDPOINT, REVALIDATION_OPTIONS);
    const response = await query.json();

    let fetchedArticle = response.data;
    fetchedArticle.attributes.publishedAt = formatDate(
        fetchedArticle.attributes.publishedAt
    );
    fetchedArticle.attributes.content = await markdownToHtml(
        fetchedArticle.attributes.content
    );

    return fetchedArticle;
};

export const getArticles = async () => {
    const ARTICLES_ENDPOINT = API_URL + '/api/articles?populate=image,author';

    const query = await fetch(ARTICLES_ENDPOINT, REVALIDATION_OPTIONS);
    const response = await query.json();
    const fetchedArticles = response.data;

    fetchedArticles.forEach((article: any) => {
        article.attributes.publishedAt = formatDate(
            article.attributes.publishedAt
        );
    });

    return fetchedArticles;
};
