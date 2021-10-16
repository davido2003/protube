fetch('https://programmingnewsapi.herokuapp.com/?format=json').then((data)=> {
    return data.json();

}).then((completedata)=>{
    let data1="";
    completedata.map((values)=>{
        data1+= `  <div class="card" style="background-color:white;">
        <h1 class="title" style="color:black;" >${values.title}</h1>
       
        <video width="500" controls>
  <source src=${values.video} type="video/mp4">
  
</video>
      <button>
    <a href=${values.link}>LINK</a>
      </button>  
        </div>`
    
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})