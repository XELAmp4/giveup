import styles from './indication.module.sass'

export default function Indication({ isAnimate, content }) {
    return <p className={  
        `${
        isAnimate ? styles.animate : ''
      }`}>{content}</p>
}
  