import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Hero from './components/Hero'
import Buisness from './components/Buisness'
import Billing from './components/Billing'
import Carddeal from './components/Carddeal'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar/>
            </div>
        </div>

 
       <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>

       </div>


       <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Buisness/> 
          <Billing/> 
          <Carddeal/> 
          <Testimonial/> 
          <Cta/> 
          <Footer/> 
        </div>

       </div>


    </div>
  )
}

export default App