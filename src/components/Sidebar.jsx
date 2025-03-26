import styles from "./Sidebar.module.css"
import capa from "../assets/capa.jpg"
import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={capa}
                className={styles.cover}
                width={500}
                alt=""
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/arthursouza20.png" />
                <strong>Arthur Souza</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Perfil
                </a>
            </footer>
        </aside>
    );
}