function leer(){
    var form = document.getElementById('formDatos')
    var formData = new FormData(form)
    
    for (let entry of formData) {
        let key = entry[0]
        let values = entry[1]

        if(values != ''){
            let ipRegEx = /\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/
            if(ipRegEx.test(values)){
                console.log('Si es una ip');
            }else{
                console.log('no es una ip');
            }
        }else{

        }

        esIP(values)
    }

    console.log('form: ', form);
}

function esIP(cadena){
    let temp = cadena.split('.')
    var temp2 = 0
    if(temp){
        console.log(temp);
        for (let i = 0; i < temp.length; i++) {
            console.log('antes de saber si es numero', temp[i]);
            if(Number(temp[i])){
            console.log('es numero', temp[i]);
                if(temp[i] >= 0 && temp[i] < 256){
            console.log('esta entre los rangos', temp[i]);
                    temp2++
                }
            }else{
                console.log('No es numero');
                return
            }
        }
        console.log(temp2);
        if(temp2 == 4){
            console.log('Si es una IP');
        }else{
            console.log('No es IP');
            return
        }
    }
}

console.log(parseInt(Math.random()*10));