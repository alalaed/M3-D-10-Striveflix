


const url = "https://striveschool-api.herokuapp.com/api/movies/"
// method="POST"
const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM5OTgyZWExZDAwMTViYjAzZTkiLCJpYXQiOjE2NDM3OTk0NTAsImV4cCI6MTY0NTAwOTA1MH0.5dZKYBo7eP4on-pcM8VC0B42JNHHlwPOAqk70FWRG1M"
const id = new URLSearchParams(window.location.search).get("Id")
method:"POST"



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
            method: "POST",
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

