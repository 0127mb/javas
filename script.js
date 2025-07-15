
let div = document.querySelector('.box');
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
data.map((item)=>{
    div.innerHTML  += `
    <div>
<h1>${item.name}</h1>
<h2>${item.username}</h2>
   <h4>${item.address.street} ${item.address.suite} ${item.address.city}</h4>
<p>${item.phone}</p>
    </div>`
})

  });