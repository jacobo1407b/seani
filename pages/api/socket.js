import { Server } from 'socket.io'
import {db} from '../../utils/firebase'
import {collection} from '../../utils/variables'

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log('*First use, starting socket.io')

    const io = new Server(res.socket.server)

    io.on('connection', socket => {

      socket.on('message', (data) => {
        const {id,time} = data
        async function update (){
          await db.doc(`${collection}/${id}`).update({
            time:time
          });
        }
        update();
      })
      socket.on('disconnect',()=>console.log('desconectado'))
    })

    res.socket.server.io = io
  } else {
    console.log('socket.io already running')
  }
  res.end()
}

export const config = {
  api: {
    bodyParser: false
  }
}

export default ioHandler