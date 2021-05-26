export const constants = {
  socketUrl: 'http://localhost:3000',
  socketNamespaces: {
    room: 'room',
    lobby: 'lobby'
  },
  peerConfig: Object.values({
    id: undefined,
    // config: {
    //   port: 9000,
    //   host: 'localhost',
    //   path: '/'
    // }
  }),
  pages: {
    lobby: '/pages/lobby',
    login: '/pages/login',
  },
  events: {
    USER_CONNECTED: 'userConnection',
    USER_DISCONNECTED: 'userDisconnection',
    
    JOIN_ROOM: 'joinRoom',
    LOBBY_UPDATED: 'lobbyUpdated',
    UPGRADE_USER_PERMISSION: 'upgradeUserPermission',
    
    SPEAK_REQUEST: 'speakRequest',
    SPEAK_ANSWER: 'speakAnswer'
  },
  
  firebaseConfig: {
    apiKey: "AIzaSyBlOf-lXRclE2LJf5avFWXKSF022kV2cy4",
    authDomain: "clubhouse-clone-f6be7.firebaseapp.com",
    projectId: "clubhouse-clone-f6be7",
    storageBucket: "clubhouse-clone-f6be7.appspot.com",
    messagingSenderId: "227157515158",
    appId: "1:227157515158:web:5618e541a2608f2fe69bb7",
    measurementId: "G-F5QDG7G09V"
  },
  storageKey: "jsexpert:storage:user"
}