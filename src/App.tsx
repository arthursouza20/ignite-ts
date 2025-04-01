import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import styles from "./App.module.css"
import { PostType } from "./components/Post"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/arthursouza20.png',
      name: 'Arthur Souza',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-03-22 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rodrigovieira14.png',
      name: 'Rodrigo Vieira',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-03-23 16:30:00'),
  },
]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
