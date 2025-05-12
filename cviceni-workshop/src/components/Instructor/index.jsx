import './index.css'

export const Instructor = (props) => {
  return(
    <div className='Instructor'>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.bio}</p>
    </div>
  )
}