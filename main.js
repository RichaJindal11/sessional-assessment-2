// document.getElementById('submit').addEventListener('click', (e)=>{
//     e.preventDefault();
//     // const a = document.getElementById('file').value;
//     // console.log(a);
//     alert("Photo has been Submited");
// })

const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
xhr.onload= function(){
    const response = JSON.parse(xhr.responseText);
    for(let i=0; i<response.length; i++){

    }
    console.log(response)
    document.getElementById('Button1').addEventListener('click', ()=>{
        
    })
    
}
xhr.send()

