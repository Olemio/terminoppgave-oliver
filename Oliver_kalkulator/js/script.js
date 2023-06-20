function utregning(x){
    var tall = 0;
    for(i = 0; i < x.length; i++){
        tall = tall + x[i];
    }
    return tall / x.length

}

function regnUtSnitt(){
    var matte = document.getElementById("matte").value;
    var norskmuntlig = document.getElementById("norskmuntlig").value;
    var norskskriftlig = document.getElementById("norskskriftlig").value;
    var norsksidemal = document.getElementById("norsksidemal").value;
    var matoghelse = document.getElementById("matoghelse").value;
    var engelskskriftlig = document.getElementById("engelskskriftlig").value;
    var engelskmuntlig = document.getElementById("engelskmuntlig").value;
    var kunstoghandverk = document.getElementById("kunstoghandverk").value;
    var samfunnsfag = document.getElementById("samfunnsfag").value;
    var krle = document.getElementById("krle").value;
    var naturfag = document.getElementById("naturfag").value;
    var kroppsoving = document.getElementById("kroppsoving").value;
    var musikk = document.getElementById("musikk").value;
    var Fremmedsprok = document.getElementById("Fremmedsprok").value;

    var svar = [Number(matte), Number(norskmuntlig), Number(norskskriftlig), Number(norsksidemal), Number(matoghelse), Number(engelskskriftlig), Number(engelskmuntlig), Number(kunstoghandverk), Number(samfunnsfag), Number(krle), Number(naturfag), Number(kroppsoving), Number(musikk), Number(Fremmedsprok)]
   
    document.getElementById("svar").innerHTML = utregning(svar).toFixed(2) + " er ditt snitt";
}