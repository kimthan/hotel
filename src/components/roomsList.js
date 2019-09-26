import React from 'react';
import { useRooms } from './useRooms'

export const RoomsList = (props) => {
    const rooms = useRooms()
   
    const roomslist = rooms.map(room => {
        const className =
            room.status === 'stayover' ? 'room stayover' :
                room.status === 'clean' ? 'room clean' :
                    room.status === 'checkout' ? 'room checkout' : 'room'

                    const handleActivatedRooms = (e) => {
                     props.handleActivatedRooms(e.target.id)
                     if(e.target.classList.contains('activated')){
                         e.target.classList.remove('activated')
                         return
                        }     
                        e.target.classList.add('activated')
                    }
        return (
            <div className={className} key={room.id} value={room.id} id={room.id} onClick={(e)=>{handleActivatedRooms(e)}
            }>
                {room.id}<br />
                {room.status} <br />
               
            </div>
        )
    })

    return (<>
        <div className="rooms">
            {roomslist}
        </div>
    </>)
}