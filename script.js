add = document.getElementById('add');

// const title = document.getElementById('title').value;
// const description = document.getElementById('description').value;


add.addEventListener('click', ()=>{
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    console.log("Updating...");

    if(localStorage.getItem('itemsJson') == null){
        itemsJsonArray = [];
        itemsJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
    }

    else{
        itemsJsonArray = localStorage.getItem('itemsJson');
        itemsJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));

    }
});