// document.getElementById('submit').addEventListener('click', (e)=>{
//     e.preventDefault();
//     // const a = document.getElementById('file').value;
//     // console.log(a);
//     alert("Photo has been Submited");
// })


document.querySelector('#search').addEventListener('click',()=>{
    const xhr = new XMLHttpRequest();
  
    // const searchValue = document.querySelector("#my-text").value;
    // console.log(searchValue)
    const url = "https://jsonplaceholder.typicode.com/photos"
    xhr.open('GET',url);

    xhr.onreadystatechange=()=>{
        if(xhr.readyState===4&& xhr.status===200){
            const response = JSON.parse(xhr.responseText);
            console.log(response)
        }
   
    }
    xhr.send()
    console.log(response)

})