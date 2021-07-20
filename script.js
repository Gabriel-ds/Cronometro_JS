var s = 0;
var m = 0;

var cron;

function start(){
    var s = 0;
    var m = 0;
    cron = setInterval(() => { timer() }, 1);
}

function stop(){
    s = 0
    m = 0
    clearInterval(cron)

    document.querySelector('.timer').innerHTML = "<h1>00:00</h1>"
   

}

function pause(){
    clearInterval(cron)

}

function timer(){
    s++
    var format = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s)

    if(s == 59) {
        s = 0
        m++

        if(m == 59){
            format = 'Fim do tempo'
            clearInterval(cron)
        }
    }

    

    document.querySelector('.timer').innerHTML = `<h1>${format}</h1>`

}
