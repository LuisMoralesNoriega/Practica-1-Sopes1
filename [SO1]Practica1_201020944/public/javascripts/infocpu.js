/**
 * Created by luis on 21/08/16.
 */
var socket = io.connect('http://localhost:3000',{'forceNew':true});


socket.on('rescpu',function (cpuPorcentaje) {
    document.getElementById('porcentaje').innerHTML =  Math.round(cpuPorcentaje) + '%';
});


setInterval(function () {
    // console.log('entro a MEMORIA RAM');
    //this.leerram();
    socket.emit("infocpu");
},5000);