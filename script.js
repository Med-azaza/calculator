const btn=document.querySelectorAll('.btn');
const text=document.getElementById('text');
const res=document.getElementById('res');
const equal=document.getElementById('equal');
var index=0;
btn.forEach(click);

function click(item) {
  item.addEventListener("click", function() {
      if(item.textContent=="X"){
          text.value+='*';
      }else if (item.textContent=="C") {
          text.value='';
          res.textContent='';
      }
      
      else {
      text.value+=item.textContent;
      }
  })
}
equal.addEventListener("click", function() {
    var ch=eval(text.value).toString();
    res.textContent=ch;
    text.value=ch;
})


