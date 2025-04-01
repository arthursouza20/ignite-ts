import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar";
import { useState } from "react";




interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    //Contagem do Like no comentário
    function handleLikeComment(){
        setLikeCount((state) =>{
            return state + 1
        });
    }

    //Deletar comentário
    function handleDeleteComment(){        
        onDeleteComment(content)
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/arthursouza20.png" alt="" />

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