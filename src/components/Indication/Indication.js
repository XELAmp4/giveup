import styles from './indication.module.sass'

export default function Indication({ isAnimate, content }) {
    return <p className={ 
        `${styles.indication} ${
        isAnimate ? styles.animate : ''
      }`}>{content}</p>
}
  