import React from 'react'

const Landing = ({submitHander}) => {
  

  return (
    <>
     
      <div className='hero-bng'>
        <section className='top'>
          <header>
            <a href='#'>Munch.food</a>
          </header>
          <h1>
            <span>the healthy </span> eating experience
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
            similique.
          </p>
          <div className='form-container'>
            <form action='' onSubmit={submitHander}>
              <div className='form-left'>
                <label for='city'> Enter your city:</label>
                <input type='text' />
                <p> Example:"San Deigo"</p>
              </div>

              <button type='submit'> order now </button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default Landing
