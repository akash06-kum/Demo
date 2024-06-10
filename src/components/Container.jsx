import styles from './Container.module.css'
const Container = ({children}) => {
    return <div className={styles.list}>{children}</div>
}

export default Container;