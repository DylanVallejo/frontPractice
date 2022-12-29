import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'


const  Navbar = ( ) =>{
    
    return(
        <header className={styles.headerContainer}>
            <ul className={styles.ulContainer}>
                <li className={styles.liRefs}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/masa'>Masa</NavLink>
                    <NavLink to='/edad'>Edad</NavLink>
                </li>
            </ul>
        </header>
    )
}
export default Navbar;