import styles from "./navbar.module.css"
import Link from "next/link"

export default function Navbar() {
    return (
        <header className = {styles.navbar}>
            <h1>Steven's Website</h1>
            <nav>
                <Link href = "/"> Home </Link>
                <Link href = "/about"> About </Link>
                <Link href = "/resume"> Resume </Link>
                <Link href = "/TicTacToe"> TicTacToe </Link>
            </nav>
        </header>
    );
}