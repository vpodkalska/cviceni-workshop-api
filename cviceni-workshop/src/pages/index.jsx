import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { WorkshopIntro } from '../components/WorkshopIntro'
import { Venue } from '../components/Venue'
import { Instructor } from '../components/Instructor'


// 1. úkol
const response = await fetch (
  'http://localhost:4001/api/workshops/0'
)
const dataZeServeru = await response.json()
//console.log(dataZeServeru.data) 



// 2. úkol
document.querySelector('#root').innerHTML = render(
  <div>
    <header>
      <h1 className='horni-sekce'><WorkshopIntro title = {dataZeServeru.data.title}/></h1>
    </header>
    <section className='sekce-pod-nadpisem'><WorkshopIntro description = {dataZeServeru.data.description}/></section>


    <h2> Kde? </h2>
    <section><Venue name = {dataZeServeru.data.venue.name}
      street = {dataZeServeru.data.venue.street} 
      city = {dataZeServeru.data.venue.city}
       />
    </section>
    

    <h2> Instruktorka </h2>
    <section>
      <Instructor name = {dataZeServeru.data.instructor.name}
        email = {dataZeServeru.data.instructor.email}
        bio = {dataZeServeru.data.instructor.bio} />
    </section>
    
    

  </div>
);
