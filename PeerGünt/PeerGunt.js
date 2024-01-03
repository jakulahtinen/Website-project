function viesti() {
    var Enimi = document.getElementById('fname');
    var Snimi = document.getElementById('lname');
    var Sposti = document.getElementById('sposti');
    var msg = document.getElementById('aihe');
    const onnistui = document.getElementById('onnistui');
    const varoitus = document.getElementById('varoitus');

    if (Enimi.value === '' || Snimi.value === '' || Sposti.value === '' || msg.value === ''){
        document.getElementById("palaute").innerHTML = "Täytä kaikki kentät!";
    }
    else{
        Enimi.value = '';
        Snimi.value = '';
        Sposti.value = '';
        msg.value = '';
        document.getElementById("palaute").innerHTML = "Viestisi on lähetetty!";
    }
}