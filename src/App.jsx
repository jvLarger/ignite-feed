import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'

import styles from './App.module.css'

function App() {

  return (
    <>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          <Post
            author="João Victor Larger"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis placeat optio explicabo cumque eum officia. Vitae, eum cupiditate quibusdam accusamus veniam iure iusto, accusantium necessitatibus ut ipsa architecto, quaerat ipsum."
          />
          <Post
            author="Rayane Larger"
            content="Novo post"
          />

        </main>

      </div>

    </>
  )
}

export default App