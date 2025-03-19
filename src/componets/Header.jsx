import styles from './Header.module.css';
import flowerLogo from '../assets/flower.svg';
 
 export function Header() {
   return (
     <header className={styles.header}>
        <img src={flowerLogo} alt="Logotipo do Ignite" />
     </header>
   );
 }