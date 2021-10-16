fetch('https://fakestoreapi.com/products').then((data)=> {
    return data.json();

}).then((completedata)=>{
    let data1="";
    completedata.map((values)=>{
        data1+= `  <div class="card" style="background-color:white;">
        <h1 class="title" style="color:black;" >${values.title}</h1>
      
  <img src=${values.image} alt="img"class="images">
 <p class="category">${values.category}</p>
  <p class="price">${values.prices}</p>
 
        </div>`
    
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})
