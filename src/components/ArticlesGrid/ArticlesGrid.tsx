import styles from './ArticlesGrid.module.css'

const ArticlesGrid = (props: any)=>{
    return(<main className={styles.main}>{props.articles}</main>)
}

export default ArticlesGrid