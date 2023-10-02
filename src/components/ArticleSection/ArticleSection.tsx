import Image from 'next/image';

import AuthorCard from '../AuthorCard/AuthorCard';

import styles from './ArticleSection.module.css';

const ArticleSection = (props: {
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
    imageAlt: string;
    title: string;
    content: string;
    authorName: string;
    authorEmail: string;
    authorBio: string;
    publishedAt: string;
}) => {
    return (
        <main className={styles.main}>
            <article>
                <Image className={styles.thumbnail}
                    src={props.imageUrl}
                    width={props.imageWidth}
                    height={props.imageHeight}
                    alt={props.imageAlt}
                    priority={true}
                />
                <h1>{props.title}</h1>
                <div className={styles.metadata}>
                    <p className={styles.metakey}>
                        Author: <span className={styles.metavalue}>{props.authorName}</span>
                    </p>
                    <p className={styles.metakey}>
                        Published: <span className={styles.metavalue}>{props.publishedAt}</span>
                    </p>
                </div>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: props.content }}></div>
                <AuthorCard
                    name={props.authorName}
                    email={props.authorEmail}
                    bio={props.authorBio}
                />
            </article>
        </main>
    );
};

export default ArticleSection;
