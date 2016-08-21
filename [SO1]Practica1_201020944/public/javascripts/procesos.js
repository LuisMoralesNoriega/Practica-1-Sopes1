/**
 * Created by luis on 19/08/16.
 */

var socket = io.connect('http://localhost:3000',{'forceNew':true});

socket.on('resproc', function(obj,procesosRunning,procesosDormidos,procesosDetenidos,procesosZombie) {

    console.log("Respuesta Resumen Procesos: " + obj.procesos.length);

    var myTableProc = "<table ID=tableProcesos border='1' style='margin: 0 auto;'>";

    myTableProc = myTableProc + "<tr>";
    myTableProc = myTableProc + "<td>" + "Total de Procesos" + "</td>";
    myTableProc = myTableProc + "<td>" + obj.procesos.length + "</td>";
    myTableProc = myTableProc + "</tr>";


    myTableProc = myTableProc + "<tr>";
    myTableProc = myTableProc + "<td>" + "Procesos en ejecucion" + "</td>";
    myTableProc = myTableProc + "<td>" + procesosRunning + "</td>";
    myTableProc = myTableProc + "</tr>";

    myTableProc = myTableProc + "<tr>";
    myTableProc = myTableProc + "<td>" + "Procesos dormidos" + "</td>";
    myTableProc = myTableProc + "<td>" + procesosDormidos + "</td>";
    myTableProc = myTableProc + "</tr>";

    myTableProc = myTableProc + "<tr>";
    myTableProc = myTableProc + "<td>" + "Procesos detenidos" + "</td>";
    myTableProc = myTableProc + "<td>" + procesosDetenidos + "</td>";
    myTableProc = myTableProc + "</tr>";

    myTableProc = myTableProc + "<tr>";
    myTableProc = myTableProc + "<td>" + "Procesos zombie" + "</td>";
    myTableProc = myTableProc + "<td>" + procesosZombie + "</td>";
    myTableProc = myTableProc + "</tr>";

    myTableProc = myTableProc + "</table>";
    document.getElementById('tableProc').innerHTML = myTableProc;

    var myTable = "<table ID=table1 border='1' style='margin: 0 auto;'>";
    for(var i=0; i<obj.procesos.length; i++){
        myTable = myTable + "<tr>";
        myTable = myTable + "<td>" + obj.procesos[i].pidProc + "</td>";
        myTable = myTable + "<td>" + obj.procesos[i].user + " </td>";
        myTable = myTable + "<td>" + obj.procesos[i].state + "</td>";
        myTable = myTable + "<td>" + obj.procesos[i].ram + "</td>";
        myTable = myTable + "<td>" + obj.procesos[i].nameProc + "</td>";
        myTable = myTable + "<td> <input type='button' id='kill' value='Matar Proceso' onclick='matar(this)'/></td>";
        myTable = myTable + "</tr>";
    }

    myTable = myTable + "</table>";

    document.getElementById('tablePrint').innerHTML = myTable;
    //document.getElementById('table1').deleteRow(0);




});


function matar(row){
    var i = row.parentNode.parentNode.rowIndex;
    var pidProc = document.getElementById('table1').rows[i].cells[0].innerText;

    socket.emit("matarproc", pidProc);

}


setInterval(function () {
   // console.log('entro a PROCESOS');
    socket.emit("peticionproc");
},5000);