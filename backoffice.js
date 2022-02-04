


let url = "https://striveschool-api.herokuapp.com/api/movies/61fd4148e1d6d30015c29803"
let methode="POST"
const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM5OTgyZWExZDAwMTViYjAzZTkiLCJpYXQiOjE2NDM3OTk0NTAsImV4cCI6MTY0NTAwOTA1MH0.5dZKYBo7eP4on-pcM8VC0B42JNHHlwPOAqk70FWRG1M"
let id = new URLSearchParams(window.location.search).get("Id")

if(id){
    methode="PUT"
    console.log("this id is ",id)
    url = url + id
    console.log( url )
    fetch( url  ,{
        method:"PUT",
        headers:{
            
            "Authorization":key
        },
    }).then( resp => resp.json())
    .then(data => {
        console.log("this movie",data)
        const name = document.getElementById("name").value = data.name
        const description = document.getElementById("description").value = data.description
        const category = document.getElementById("category").value = data.category
        const imageUrl = document.getElementById("image-Url").value = data.imageUrl
    }).catch(e => { console.log(e) })

}
                    
                


const create = () => {

    const name = document.getElementById("name").value
    const description = document.getElementById("description").value
    const category = document.getElementById("category").value
    const imageUrl = document.getElementById("image-Url").value

    const movie = {
        "name": `${name}`,
        "description": `${description}`,
        "category": `${category}`,
        "imageUrl": `${imageUrl}}`
    }
    
        fetch(url, {
            method: method,
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM5OTgyZWExZDAwMTViYjAzZTkiLCJpYXQiOjE2NDM3OTk0NTAsImV4cCI6MTY0NTAwOTA1MH0.5dZKYBo7eP4on-pcM8VC0B42JNHHlwPOAqk70FWRG1M"
            }
        })  
}


const omit = () => {

    fetch(url + id, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM5OTgyZWExZDAwMTViYjAzZTkiLCJpYXQiOjE2NDM3OTk0NTAsImV4cCI6MTY0NTAwOTA1MH0.5dZKYBo7eP4on-pcM8VC0B42JNHHlwPOAqk70FWRG1M"
        }
    })
    window.location.assign("./")

}

