
const resultBox = document.getElementById('resultBox')
const btn = document.getElementById("btn")


btn.addEventListener('click',function(e){
    e.preventDefault()
    const hexadecimalInput = document.getElementById('hexadecimal')

    if(hexadecimalInput.value === ''){
      alert('Please input a number');
    }else if(hexadecimalInput.value < 0){
      alert('Please input a positive number');
    }else{
      resultBox.style.visibility = 'visible'
    }

     binaryNumber = Number(hexadecimalInput.value).toString(2)
     resultBox.innerHTML = binaryNumber;

  });