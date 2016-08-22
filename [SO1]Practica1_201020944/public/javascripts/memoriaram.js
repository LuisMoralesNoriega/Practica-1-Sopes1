/**
 * Created by luis on 19/08/16.
 */



var socket = io.connect('http://localhost:3000',{'forceNew':true});


socket.on('resram',function (memPorcentaje, memtotal, memOcupada) {
    line1.append(new Date().getTime(), memPorcentaje);

    document.getElementById('totalservicio').innerHTML = Math.round(memtotal/1024) + ' MB';

    document.getElementById('totalconsumida').innerHTML = Math.round(memOcupada/1024) + ' MB';

    document.getElementById('porcentaje').innerHTML =  Math.round(memPorcentaje) + '%';
});



var smoothie = new SmoothieChart({
    grid: {
        strokeStyle: 'rgb(125,0,0)', fillStyle: 'rgb(255,255,255)',
        lineWidth: 1, millisPerLine: 250, verticalSections: 6,
    },
    labels: {fillStyle: 'rgb(60,0,0)'}
});

smoothie.streamTo(document.getElementById("mycanvas"), 1000 /*delay*/);

// Data
var line1 = new TimeSeries();

// Add to SmoothieChart
smoothie.addTimeSeries(line1, {
    strokeStyle: 'rgb(0,255,0)',
    fillStyle: 'rgba(0,255,0,0.4)',
    lineWidth: 3
});
//smoothie.addTimeSeries(line2);



setInterval(function () {
   // console.log('entro a MEMORIA RAM');
    //this.leerram();
    socket.emit("inforam");
},5000);