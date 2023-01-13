import net from "net";


const creditClientUnit = {}



creditClientUnit.create = () => {
  console.log('client')
  const socket = net.connect({
    port: 2034,
    host: "localhost"
  })

  socket.setEncoding('utf-8')

  socket.on('connect', function () {
    console.log('on connect')

    setInterval(function (){
      socket.write('cky with 10seconds')
    }, 5000)

    setTimeout( () => {
      //socket.destroy
      socket.end('Bye server')
    }, 100000)
  })

  //서버로부터 받은 데이터를 화면에 출력
  socket.on('data', function (data) {
    console.log("Read from server" + data)
  })

  socket.on('close', function () {
    console.log('close')
  })

  socket.on('error', function (err) {
    console.log('on error: ', err.code)
  })

  return socket
}

export default creditClientUnit