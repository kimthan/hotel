import React, { useState } from 'react';
import { RoomsList } from './components/roomsList';
import { Assign } from './components/assign';
import { Info } from './components/info';
import { create } from 'domain';




function App() {
  const [status, setStatus] = useState('')
  const [activatedRooms, setActivatedRooms] = useState([])
  const handleStatus = (status) => {
    setStatus(status)
  }

  const handleActivatedRooms = (e) => {
    if (activatedRooms.includes(e)) {
      const filtered = activatedRooms.filter(room => {
        return room !== e
      })
      setActivatedRooms(()=>[...filtered])
      return
    }
    setActivatedRooms(()=>
      [...activatedRooms, e]
    )


  }

  const resetActiveRooms = () => {
    setActivatedRooms(()=>[])
    
  }



  return (
    <div className="container">

      <RoomsList handleActivatedRooms={handleActivatedRooms} />
      <Assign status={handleStatus} activatedRooms={activatedRooms} resetActiveRooms={resetActiveRooms}/>
     
    </div>
  );


}

export default App;
