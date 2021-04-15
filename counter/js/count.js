const num=document.querySelector('.number');
const dec=document.getElementById('dec');
const res=document.getElementById('res');
const inc=document.getElementById('inc');

inc.addEventListener('click',function() {
    var val = parseInt(num.textContent) +1;
    num.textContent=val;
    if (val > 0) {
      num.style.color = "green";
    }
    if (val == 0) {
      num.style.color = "black";
    }

   
})
dec.addEventListener("click", function () {
  var val = parseInt(num.textContent) - 1;
  num.textContent = val;
  if (val < 0) {
    num.style.color = 'red';
  }
  if (val==0){
    num.style.color='black';
  }
});
res.addEventListener("click", function () {
  num.textContent = 0;
  num.style.color='black'
});