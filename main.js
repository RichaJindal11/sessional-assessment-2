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
    // for(let i=0; i<response.length; i++){

    //}
    console.log(response[0].url);
    console.log(response[0]);
    console.log(response[99]);
    let template ="";
    for(let i=0; i<response.length; i++){
        let id = response[i].thumbnailUrl;
        let title = response[i].title;
        template += `
        <div style="text-align">
            <img src="${id}" style="margin-right: 50px;">
            <div style="width:150px">
            <p style="overflow:auto">${title}</p>
            </div>
        </div>`
       
    }
    document.querySelector("#my-container").innerHTML = template
    // document.getElementById('Button1').addEventListener('click', ()=>{      <p>resonse[${i}].title</p>
        
    // })
    
}
xhr.send()

