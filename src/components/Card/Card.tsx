import styles from './Card.module.css'

type CardProps = {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return <div className={styles.root}>{children}</div>
}

export default Card
