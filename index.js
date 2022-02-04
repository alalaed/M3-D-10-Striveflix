





const url = "https://striveschool-api.herokuapp.com/api/movies/"
const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM5OTgyZWExZDAwMTViYjAzZTkiLCJpYXQiOjE2NDM3OTk0NTAsImV4cCI6MTY0NTAwOTA1MH0.5dZKYBo7eP4on-pcM8VC0B42JNHHlwPOAqk70FWRG1M"

// fetch(url,{
//     method:"GET",
//     headers:{
//               "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM5OTgyZWExZDAwMTViYjAzZTkiLCJpYXQiOjE2NDM3OTk0NTAsImV4cCI6MTY0NTAwOTA1MH0.5dZKYBo7eP4on-pcM8VC0B42JNHHlwPOAqk70FWRG1M"
//             }
// }).then(response=>response.json())
// .then(data=>console.log(data))

// const getID = async () =>{

//     try {
//         const go = await fetch (url, {// needs the genre for id 
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM5OTgyZWExZDAwMTViYjAzZTkiLCJpYXQiOjE2NDM3OTk0NTAsImV4cCI6MTY0NTAwOTA1MH0.5dZKYBo7eP4on-pcM8VC0B42JNHHlwPOAqk70FWRG1M"
//             }
//         })
//         const bodyResp = await go.json()
//         console.log(bodyResp)
//         const{ _id,name } = bodyResp[0]
//         console.log(_id)

//         } catch (error) {
//             console.log(error)
//         }
// }




const getGenre = async () => {
    try {
        const go = await fetch (url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": key
            }
            
        })
        console.log(go)
        const bodyResp = await go.json()
        // console.log(bodyResp)

        

        for( let i=0; i<bodyResp.length; i++){
                const newUrl = url + bodyResp[i]
                fetch(newUrl  ,{
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": key
                    }
            })
            .then(response=>response.json())
            .then(data=>console.log("this is ",data))
        }
        return bodyResp

        } catch (error) {
            console.log(error)
        }
}


const displayAddedMovies = async() => {

    try {
        const go = await fetch (url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": key
            }
            
        })
        console.log(go)
        const bodyResp = await go.json()
        // console.log(bodyResp)

        

        for( let i=0; i<bodyResp.length; i++){
                const newUrl = url + bodyResp[i]
                fetch(newUrl  ,{
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": key
                    }
            })
            .then(response=>response.json())
            .then(data => {
                
                for( let i =0; i<data.length; i++){

                    console.log("this is", data[i])

                    let container = document.getElementById("added")

                    console.log("which id",data[i].imageUrl)

                    let inhalt = `
                        <div class="col-16 col-sm-4 col-md-3 col-lg-2 px-1 ">
                        <img src="${data[i].imageUrl}"alt="" class="titles img-fluid">
                        <a href="./backoffice.html?Id=${data[i]._id}"><p>${data[i].name}</p></a>
                        </div>`
                    container.innerHTML += inhalt

                }
            })
            
        }
        
        } catch (error) {
            console.log(error)
        }    
}

displayAddedMovies()