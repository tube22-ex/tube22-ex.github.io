let word = []
let a_z = 'abcdefghijklmnopqrstuvwxyz'
let lo = 0
let hatena = '';


document.getElementById('button').addEventListener('click',function onelook(){
    let w_str
    hatena = hatena.padEnd(document.getElementById('len').value -1,"?")
    fetch('https://api.datamuse.com/words?sp=' + a_z[lo] + hatena +'&max='+document.getElementById('get_word').value)
.then(function (response) {
  return response.json();
})
.then( function(data) {
    for(i in data){
        if (!data[i].word.match(/[-| |0-9|é]/)) {
            if(document.getElementById('checkbox').checked === true){
                word.push( data[i].word + "\n")
            }else{word.push( data[i].word)}
  
}
    
    }
    })
    .then(function () {
         if(lo <= a_z.length - 1){
    document.getElementById('Progress').innerText = lo + "/25"
    lo++ 
    onelook()
}else{
    
    let naka
    let inp = document.createElement('input')
    inp.type = 'button'
    inp.value = 'ダウンロード'
    document.getElementById('Progress').append(inp)
    inp.addEventListener('click',function(){
        if(document.getElementById('checkbox').checked === false){
            naka = new Blob([word], {
                type: "text/plan"
              });
    }else{
    
        naka = new Blob(word, {
            type: "text/plan"
          });
    }
          let dd = document.createElement('a');
          dd.href = URL.createObjectURL(naka);
          dd.download = 'Onelook_word.txt';
          dd.click();
                   
        word = []
        a_z = 'abcdefghijklmnopqrstuvwxyz'
        lo = 0
        hatena = '';

    })

}
    })
})
