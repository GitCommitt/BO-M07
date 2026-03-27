import styles from './Top10Item.module.css'

export function Top10Item(props){
    return(
        <li className={styles.book}>
            <div className={styles.number}>
                {props.number}
            </div>
            <div className={styles.bookInfo}>
                <h1>{props.title}</h1>
                <p>{props.author}</p>
                
            </div>
        </li>
    )
}
