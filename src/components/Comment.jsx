import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount(likeCount+1)
    }

    function handleDeleteComment(){        
        onDeleteComment(content)
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/arthursouza20.png" />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Arthur Souza</strong>
                            <time title="23/03/2025 às 14:02" dateTime="23/03/2025 13:03:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}