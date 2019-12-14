import io from 'socket.io-client';
// const URL_DEV = 'http://localhost:8181';
const URL_PROD = 'https://fast-lowlands-91405.herokuapp.com';
let socket = io.connect(URL_PROD);
socket.on('welcome',  msg => console.info('msg: ', msg) );
socket.emit('clientAuth', 'verycomplicatedkey');

export default socket;