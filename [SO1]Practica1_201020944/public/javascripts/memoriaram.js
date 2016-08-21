/**
 * Created by luis on 19/08/16.
 */



var socket = io.connect('http://localhost:3000',{'forceNew':true});


socket.on('resram',function (memPorcentaje, memtotal, memOcupada) {
    document.getElementById('totalservicio').innerHTML = memtotal;

    document.getElementById('totalconsumida').innerHTML = memOcupada;

    document.getElementById('porcentaje').innerHTML =  Math.round(memPorcentaje) + '%';
});


setInterval(function () {
   // console.log('entro a MEMORIA RAM');
    //this.leerram();
    socket.emit("inforam");
},5000);