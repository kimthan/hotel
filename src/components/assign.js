import React from 'react';
import { handleRoomStatus } from './firebaseUpdateData'
export const Assign = (props) => {


    const handleCheckout = () => {
        handleRoomStatus(props.activatedRooms, 'checkout')
        props.resetActiveRooms()
        Array.from(document.getElementsByClassName("activated")).forEach(function (item) {
            item.classList.remove('activated')
        });
    }
    const handleStayover = () => {
        handleRoomStatus(props.activatedRooms, 'stayover')
        props.resetActiveRooms()
        Array.from(document.getElementsByClassName("activated")).forEach(function (item) {
            item.classList.remove('activated')
        });
    }
    const handleClean = () => {
        handleRoomStatus(props.activatedRooms, 'clean')
        props.resetActiveRooms()
        Array.from(document.getElementsByClassName("activated")).forEach(function (item) {
            item.classList.remove('activated')
        });
    }
    console.log(props.activatedRooms);
    if(props.activatedRooms.length){

        return (
        <>
            <div className="total_selected_rooms">selected rooms: {props.activatedRooms.length}</div>
            <div className="assign" >
                <div className="button_meny" onClick={(e) => handleCheckout(e)}>checkout</div>
                <div className="button_meny" onClick={(e) => handleStayover(e)}>stayover</div>
                <div className="button_meny" onClick={(e) => handleClean(e)}>clean</div>
            </div>
        </>
            )
    } else { return <div></div>}
    }