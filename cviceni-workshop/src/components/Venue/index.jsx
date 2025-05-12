import './index.css'

export const Venue = (props) => {
  return(
    <div className='Venue'>
      <p>{props.name}</p>
      <p>{props.street}</p>
      <p>{props.city}</p>
    </div>
  )
}