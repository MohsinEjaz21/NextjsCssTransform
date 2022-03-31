import styles from '../styles/button.module.css'

export default function CustomBtn({ children, onClick }) {
  return (
    <>
      <button className={styles.customBtn} onClick={onClick}>
        {children}
      </button>
    </>
  )
}

