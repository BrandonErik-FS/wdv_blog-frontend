import styles from './AuthorCard.module.css';

const AuthorCard = (props: { name: string; email: string; bio: string }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.heading}>About {props.name} </h3>
                <a className={styles.link} href={`mailto://${props.email}`}>
                    Send A Message
                </a>
            </div>
            <p className={styles.content}>{props.bio}</p>
        </section>
    );
};

export default AuthorCard;
