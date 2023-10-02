import Image from 'next/image';
import Link from 'next/link';

import styles from './ArticleCard.module.css';

const ArticleCard = (props: {
    articleId: number;
    articleSlug: string;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
    imageAlt: string;
    title: string;
    excerpt: string;
    authorName: string;
    publishedAt: string;
}) => {
    return (
        <article className={styles.article} key={props.articleId}>
            <Link href={`/article/${encodeURIComponent(props.articleSlug)}`}>
                <Image
                    className={styles.thumbnail}
                    src={props.imageUrl}
                    width={props.imageWidth}
                    height={props.imageHeight}
                    alt={props.imageAlt}
                />
            </Link>

            <Link href={`/article/${encodeURIComponent(props.articleSlug)}`}>
                <h1 className={styles.title}>{props.title}</h1>
            </Link>
            <div className={styles.metadata}>
                <p className={styles.metakey}>
                    Author:{' '}
                    <span className={styles.metavalue}>{props.authorName}</span>
                </p>
                <p className={styles.metakey}>
                    Published:{' '}
                    <span className={styles.metavalue}>
                        {props.publishedAt}
                    </span>{' '}
                </p>
            </div>
            <p className={styles.excerpt}>{props.excerpt}</p>
            <Link
                className={styles.readnow}
                href={`/article/${encodeURIComponent(props.articleSlug)}`}
            >
                Read Now
            </Link>
        </article>
    );
};

export default ArticleCard;
