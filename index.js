let formData={
    name:``,
    email:``
}

function submitData(){
    let configObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
      
    
    return fetch("http://localhost:3000/users", configObject)
        .then(function(response) {
         return response.json();
         })
        .then(function(object) {
            console.log(object);
        })
        .catch(function(error) {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
        }); 
}
