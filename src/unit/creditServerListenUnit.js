import net from "net";

const ipaddr = "localhost"

const creditServerListenUnit = {}

creditServerListenUnit.exec = (PORT) => {

  let server = net.createServer(function (socket) {
    console.log(socket.address().address + " connected. ");

    socket.setEncoding('utf-8')

    //client로 부터 오는 data를 화면에 출력
    socket.on('data', function (data) {
      console.log(data)
    })

    //client와 접속이 끊기는 메세지 출력
    socket.on('close', function () {
      console.log('client disconnected')
    })

    setTimeout(() => {
      //client가 접속하면 화면에 출력해주는 메시지
      socket.write('welcome to server')
      socket.write(' + send to client')
    }, 500)

    setTimeout(() => {
      socket.destroy();
    }, 6000)
  });

  //에러 발생할 경우 화면에 메시지 출력
  server.on("error", function (err) {
    console.log('err', err.code)
  })

  server.listen(PORT, ipaddr, function () {
    console.log('listening on 2034...')
  })
}

export default creditServerListenUnit