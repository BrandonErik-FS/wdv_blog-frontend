import type { Metadata } from 'next';

import { API_URL, getArticles } from '@/utils/api';

import ArticleCard from '@/components/ArticleCard/ArticleCard';
import ArticlesGrid from '@/components/ArticlesGrid/ArticlesGrid';

export const metadata: Metadata = {
    title: 'Articles',
    description: 'Read all articles.'
};

export default async function Home() {
    const articles = await getArticles();

    let articleCards = articles.map((article: any) => {
        return (
            <ArticleCard
                key={article.id}
                articleId={article.id}
                articleSlug={article.attributes.slug}
                imageUrl={
                    API_URL +
                    article.attributes.image.data.attributes.formats.medium.url
                }
                imageWidth={
                    article.attributes.image.data.attributes.formats.medium
                        .width
                }
                imageHeight={
                    article.attributes.image.data.attributes.formats.medium
                        .height
                }
                imageAlt={
                    article.attributes.image.data.attributes.alternativeText
                }
                title={article.attributes.title}
                authorName={article.attributes.author.data.attributes.name}
                publishedAt={article.attributes.publishedAt}
                excerpt={article.attributes.excerpt}
            />
        );
    });

    return (
        <>
            <ArticlesGrid articles={articleCards}></ArticlesGrid>
        </>
    );
}
