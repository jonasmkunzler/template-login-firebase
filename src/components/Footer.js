import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre o que você tem interesse!</h3>
      <p>Template LOGIN &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer