import styles from './tabuleiro.module.css'

export default function Tabuleiro(props) {
    return (
        <>
            <div className={styles.container}>
                <div>
                    TABULEIRO {props.name}
                </div>
            </div>
            
        </>
    )
}