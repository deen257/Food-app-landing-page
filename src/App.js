import './App.css';
import Landing from './Landing';
import Next from './Next';
import React from 'react'

function App() {
  const [search, setSearch] = React.useState(false)
  const submitHander = (e) => {
    e.preventDefault()
    setSearch(true)
  }
  const handleCLick = () => {
    setSearch(false)
  }
  return (
    <>
      {search ? (
        <div className='overlay'>
          <h3>searching now...</h3>
          <button className='btn' onClick={handleCLick}>Close</button>
        </div>
      ) : null}
      <Landing submitHander={submitHander}/>
      <Next />
    </>
  )
}

export default App;
