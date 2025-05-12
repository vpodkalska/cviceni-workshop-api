import './index.css'

export const WorkshopIntro = (props) => {
  return(
    <div className='Intro'>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  )
}