import { constants } from "../../_shared/constants.js"
import SocketBuilder from "../../_shared/socketBuilder.js"

const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
  .setOnUserConnected((user) => console.log('user connected!', user))
  .setOnUserDisconnected((user) => console.log('user disconnected!', user))
  .build()

const room ={
  id: Date.now(),
  topic: "JS Expert"
}

const user ={
  img: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png',
  userName: 'Diego Apolinário'
}

socket.emit(constants.events.JOIN_ROOM, { user, room })