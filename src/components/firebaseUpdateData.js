
import firebase from '../firebase'


export const handleRoomStatus = (roomNr, status) => {
    if(status === 'checkout' || status ==='stayover' || status=== 'clean'){

        roomNr.map(element => {
            
            firebase.firestore()
                .collection('rooms')
                .doc(element.toString()).update({ status: status })
        });
    }
}