import type { Metadata } from 'next';

import { getArticle } from '@/utils/api';

import ArticleSection from '@/components/ArticleSection/ArticleSection';

export const metadata: Metadata = {
    title: 'Articles',
    description: 'Read all articles.'
};

export default async function Page({ params }: { params: { slug: string } }) {
    const article = await getArticle(params.slug);
    return (
        <>
            <ArticleSection
                imageUrl={
                    article.attributes.image.data.attributes.formats.large.url
                }
                imageWidth={
                    article.attributes.image.data.attributes.formats.large.width
                }
                imageHeight={
                    article.attributes.image.data.attributes.formats.large
                        .height
                }
                imageAlt={
                    article.attributes.image.data.attributes.alternativeText
                }
                title={article.attributes.title}
                authorName={article.attributes.author.data.attributes.name}
                authorEmail={article.attributes.author.data.attributes.email}
                authorBio={article.attributes.author.data.attributes.bio}
                publishedAt={article.attributes.publishedAt}
                content={article.attributes.content}
            />
        </>
    );
}
