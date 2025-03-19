import { Header } from './componets/Header';
import { Post } from './Post'
import { Sidebar } from './componets/Sidebar';
import styles from './App.module.css';
import './global.css';
 
 export function App() {
   return (
    <div>

        <Header />

        <div className={styles.wrapper}>
         <Sidebar />
         <main>
           <Post
             author="Noelle Paes"
             content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
           />
           <Post
             author="Gabriel Buzzi"
             content="Um novo post muito legal"
           />
         </main>
       </div>
     </div>
   )
 }