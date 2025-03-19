import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
 
 export function Sidebar() {
   return (
     <aside className={styles.sidebar}>
       <img
         className={styles.cover}
         src="https://images.unsplash.com/photo-1637944059066-81c8eb0f7c02?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       />
 
       <div className={styles.profile}>

       <img className={styles.avatar} src="https://github.com/noellepaes.png" />
         <strong>Noelle Paes</strong>
         <span>Full Stack</span>
       </div>
 
       <footer>
         <a href="#">
         <PencilLine size={20} />
           Editar seu perfil
         </a>
       </footer>
     </aside>
   );
 }