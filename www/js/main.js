window.onload = (event) => {
  //console.log("page is fully loaded");
    loadCategories();
loadSites();

};

function loadCategories(){
    fetch("http://localhost:3000/categories")
    .then(res => res.json())
      .then(data => drawData(data))

      let drawData = (data) => {
      data.forEach((category, index) => {
        let parent = document.getElementsByTagName('ul')[0]
        let child = document.createElement('li')
        /* Creo un radio buttom para guardar la categoría en él*/
        let $rdButom = `
        <input class="radio-button" type="radio" 
        name="category" 
        id="rd-${category.name}" 
        value="${category.name}"
        `;

        if(index===0){
            $rdButom += ` checked`
        }       
        
        $rdButom += `
        >
        <label for="rd-${category.name}"><span></span>${category.name}</label>
        `
        child.innerHTML = $rdButom;
        //document.createElement('input')
        
        parent.appendChild(child)
      })
    }
}

function loadSites(){
    let $tableHeader = `
        <th>Site</th>
        <th>Username</th>
        <th>Created at</th>
        <th>Actions</th>
    `;
    
    const parent = document.getElementById('main-sites-table')
    let header = document.createElement('tr')
    header.appendChild($tableHeader)
    parent.appendChild(header)
    
    fetch("http://localhost:3000/sites")
    .then(res => res.json())
      .then(data => drawData(data))

      
      let drawData = (data) => {
      data.forEach(site => {
        

        let child = document.createElement('tr')
        
        let $row = `
        <td>${site.url}</td>
          <td>${site.user}</td>
          <td>${site.createdAt}</td>
          <td>
            <button class="edit-site">Edit</button>
            <button class="delete-site">Delete</button>
          </td>
        `;
        child.insertAdjacentHTML('beforeend', $tableHeader);


        /* Creo un radio buttom para guardar la categoría en él*/
        
        
        parent.appendChild(child)
      })
    }
}

/*

let drawData = (data) => {
      data.forEach(category => {
        let parent = document.getElementsByTagName('ul')[0]
        let child = document.createElement('li')
        // child.innerText = JSON.stringify(category)
        child.innerText = category.name
        parent.appendChild(child)
      })
    }

    fetch("http://localhost:3000/categories")
      .then(res => res.json())
      .then(data => drawData(data))

*/