var napbar=document.getElementById('narba')
var icon=document.getElementsByClassName('mobilemenu') [0]
var ma=napbar.clientHeight
icon.onclick=function () {
    var open=napbar.clientHeight === ma
    if(open){
        napbar.style.height='auto'
    }else{
        napbar.style.height=null
    }

    console.log(napbar.clientHeight)
    
}
