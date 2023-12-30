import propTypes from 'prop-types'
import styles from './Tooltip.module.css'
export const Tooltip = ({
  children,
  text = 'Ctrl + K',
  textColor = 'white',
}) => {
  return (
    <div className={styles['tooltip-container']}>
      <div className={styles['children-container']}>{children}</div>
      <div
        className={styles.tooltip}
        style={{ width: `${text.length * 10}px`, color: textColor }}
      >
        {text}
      </div>
    </div>
  )
}

Tooltip.propTypes = {
  children: propTypes.node.isRequired,
  text: propTypes.string,
  textColor: propTypes.string,
}
