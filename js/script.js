document.querySelector('#asideu').addEventListener('click',function(id){

    document.querySelector('.esu').style.display="flex"
    document.querySelector('.esb').style.display="none"
    document.querySelector('.esn').style.display="none"
    document.querySelector('.esm').style.display="none"
    document.querySelector('.esc').style.display="none"
    document.querySelector('.dicas').style.display="none"
    document.querySelector('.insta').style.display='none'
    document.querySelector('.videos').style.display="none"
    document.querySelector('.ramal').style.display="none"

})
document.querySelector('#asiden').addEventListener('click',function(id){

    document.querySelector('.insta').style.display='none'
    document.querySelector('.esu').style.display="none"
    document.querySelector('.esb').style.display="none"
    document.querySelector('.esn').style.display="flex"
    document.querySelector('.esm').style.display="none"
    document.querySelector('.esc').style.display="none"
    document.querySelector('.dicas').style.display="none"
    document.querySelector('.videos').style.display="none"
    document.querySelector('.ramal').style.display="none"

})
document.querySelector('#asidem').addEventListener('click',function(id){

    document.querySelector('.insta').style.display='none'
    document.querySelector('.esu').style.display="none"
    document.querySelector('.esb').style.display="none"
    document.querySelector('.esn').style.display="none"
    document.querySelector('.esm').style.display="flex"
    document.querySelector('.esc').style.display="none"
    document.querySelector('.dicas').style.display="none"
    document.querySelector('.videos').style.display="none"
    document.querySelector('.ramal').style.display="none"


})
document.querySelector('#asideb').addEventListener('click',function(id){

    document.querySelector('.esu').style.display="none"
    document.querySelector('.esb').style.display="flex"
    document.querySelector('.esn').style.display="none"
    document.querySelector('.esm').style.display="none"
    document.querySelector('.esc').style.display="none"
    document.querySelector('.dicas').style.display="none"
    document.querySelector('.ramal').style.display="none"
    document.querySelector('.videos').style.display="none"
    document.querySelector('.insta').style.display='none'

})
document.querySelector('#asidec').addEventListener('click',function(id){

    document.querySelector('.esu').style.display="none"
    document.querySelector('.esb').style.display="none"
    document.querySelector('.esn').style.display="none"
    document.querySelector('.esm').style.display="none"
    document.querySelector('.ramal').style.display="none"
    document.querySelector('.esc').style.display="flex"
    document.querySelector('.dicas').style.display="none"
    document.querySelector('.videos').style.display="none"
    document.querySelector('.insta').style.display='none'


})
document.querySelector('#asideramal').addEventListener('click',function(id){
   
    document.querySelector('.ramal').style.display="flex"
    document.querySelector('.esu').style.display="none"
    document.querySelector('.esb').style.display="none"
    document.querySelector('.esn').style.display="none"
    document.querySelector('.esm').style.display="none"
    document.querySelector('.esc').style.display="none"
    document.querySelector('.dicas').style.display="none"
    document.querySelector('.videos').style.display="none"
    document.querySelector('.insta').style.display='none'


})
document.querySelector('.logo').addEventListener('click',function(id){
    
    document.querySelector('.insta').style.display='flex'
    document.querySelector('.esu').style.display="none"
    document.querySelector('.esb').style.display="none"
    document.querySelector('.esn').style.display="none"
    document.querySelector('.esm').style.display="none"
    document.querySelector('.esc').style.display="none"
    document.querySelector('.dicas').style.display="none"
    document.querySelector('.videos').style.display="none"
    document.querySelector('.ramal').style.display="none"
})
document.querySelector('#asiderlinks').addEventListener('click',function(){

    document.querySelector('.dicas').style.display="flex"
    document.querySelector('.esu').style.display="none"
    document.querySelector('.esb').style.display="none"
    document.querySelector('.esn').style.display="none"
    document.querySelector('.esm').style.display="none"
    document.querySelector('.esc').style.display="none"
    document.querySelector('.ramal').style.display="none"
    document.querySelector('.insta').style.display='none'
    document.querySelector('.videos').style.display="none"

 })

 document.querySelector('#asidevideo').addEventListener('click',function(){
    document.querySelector('.videos').style.display="flex"
      document.querySelector('.dicas').style.display="none"
    document.querySelector('.esu').style.display="none"
    document.querySelector('.esb').style.display="none"
    document.querySelector('.esn').style.display="none"
    document.querySelector('.esm').style.display="none"
    document.querySelector('.esc').style.display="none"
    document.querySelector('.ramal').style.display="none"
    document.querySelector('.insta').style.display='none'
 
})


 document.querySelector("#radiobranco").onclick = function() {

    let t =  document.getElementsByName('bg')
        if(t[0].checked){
            document.body.style.backgroundColor="rgb(61, 63, 65)"
            document.body.style.color="white"
    let ramalh3 = document.querySelectorAll('.ramal h3')
         for (let i = 0; i < ramalh3.length; i++){ 
            ramalh3[i].style.color="white"

        }
 }

            let d =document.querySelectorAll('.projetopasso')
            for(i=0;i<d.length;i++){
                d[i].style.backgroundColor="rgb(61, 63, 65)"
            }

            let b = document.querySelectorAll('.estruturas')
           for (let i = 0; i < b.length; i++) {
              b[i].style.backgroundColor="rgb(61, 63, 65)"
    }

    let des = document.querySelectorAll(".avisos p")
    for(i=0;i<des.length;i++){
        des[i].style.color="gray"
    }
    let avs = document.querySelectorAll(".descricao")
    for(i=0;i<avs.length;i++){
        avs[i].style.backgroundColor="rgb(61, 63, 65)"
    }
}    
           


 document.querySelector("#radiopreto").onclick = function() {

    let t =  document.getElementsByName('bg')
        if(t[1].checked){
            document.body.style.backgroundColor="white"
            document.body.style.color="rgb(44, 42, 33"

         let propavisos = document.querySelectorAll('.estruturas .avisos ')
            for(i=0;i<propavisos.length;i++){
                propavisos[i].style.backgroundColor="gold"
            }
           

            let b = document.querySelectorAll('.estruturas')
            
            for (let i = 0; i < b.length; i++) {
               b[i].style.backgroundColor="white"

            }
            let d =document.querySelectorAll('.projetopasso')
            for(i=0;i<d.length;i++){
                d[i].style.backgroundColor="white"
            }
            
        }
        let ramalh3 = document.querySelectorAll('.ramal h3')
            for (let i = 0; i < ramalh3.length; i++){ 
                ramalh3[i].style.color="black"


   }
   let avs = document.querySelectorAll(".descricao")
    for(i=0;i<avs.length;i++){
        avs[i].style.backgroundColor="white"
    }

 }
 
    
let ham = document.querySelector(".hamburguer").addEventListener('click',function(){


    if (document.querySelector('aside').style.display=="none") {
 document.querySelector('aside').style.display="flex"

        
    } else {
 document.querySelector('aside').style.display="none"
        
    }
})
document.querySelector('aside').addEventListener('click',function(){
    var largura = window.screen.width

    if(largura < 800){
        document.querySelector('aside').style.display="none"
        }
    }
)