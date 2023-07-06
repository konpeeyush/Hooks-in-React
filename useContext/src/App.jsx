import React from 'react'
import ComponentA from './components/ComponentA'

export const userContext = React.createContext()
export const channelContext = React.createContext()
const App = () => {
  return (
    <div>
      <userContext.Provider value={'Peeyush'}>
        <channelContext.Provider value={'konpeeyush'}>
          <ComponentA />
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  )
}

export default App