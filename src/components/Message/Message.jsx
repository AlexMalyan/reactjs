import style from './message.module.css'

export const Message = (props) => {
  return (
    <div className={style.message}>Message: {props.text}</div>
  )
}
