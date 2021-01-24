import styles from '../styles.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <div className={styles.hello}>
                <Header />
                <h1>This Is A Comic Book 💬📚</h1>
            </div>
        </>
    )

}