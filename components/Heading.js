import css from '@/scss/Heading.module.scss'

export default function Heading({ text }) {
  return (
    <div className={css.container}>
      <div className={css.center}>
        {text}
      </div>
    </div>
  )
}