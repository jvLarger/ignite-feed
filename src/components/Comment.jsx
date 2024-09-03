import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>

            <Avatar
                hasBorder={false}
                src='https://github.com/jvLarger.png'
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Victor Larger</strong>
                            <time title='1 de setembro às 17:39h' dateTime="2024-09-01 17:39:00">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        Muito bom Devon, parabéns!!!
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}