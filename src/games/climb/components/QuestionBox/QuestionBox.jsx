import styles from './QuestionBox.module.css'

export function QuestionBox({ question, color }) {
  const op = question.operator === '*' ? '×' : question.operator
  const variant = color === 'blue' ? styles.blue : styles.red

  return (
    <div className={`${styles.box} ${variant}`}>
      {question.num1} {op} {question.num2} = ?
    </div>
  )
}
