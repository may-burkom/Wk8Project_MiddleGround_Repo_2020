// debugger
console.log("index.js is running")

axios.get('http://localhost:3000/buyer')
    .then(function(response) {

        const itemsArr = response.data
        console.log(itemsArr[0])

        const item2Num = document.querySelector("#item2No")
        const item2Img = document.querySelector("#item2Img")
        const item2Name = document.querySelector("#item2Name")
        const item2Des = document.querySelector("#item2Descr")
        const item2Price = document.querySelector("#item2Price")

        // const itmObjArr = [item2Num, item2Img, item2Name, item2Des, item2Price]
        // const counter = 0
        // console.log("before while")
        // while (counter < itmObjArr.length){
        //     console.log("while loop running")
        //     itemsArr.forEach(function(item){
        //         console.log(item)
        //         const newtd = document.createElement("td")
        //         newtd.innerHTML = item.
        //         itmObjArr[counter].appendChild(newtd)
        //         counter++
        //     });
        // }
        // console.log("after while")

        ///////////////////////////////Use function/loop for this///////////////////////////////
        const newtd = document.createElement("td")
        newtd.innerHTML = itemsArr[0].number
        item2Num.appendChild(newtd)

        const imgtd = document.createElement("td")
        let imgtag = document.createElement("img")
        imgtag.src = itemsArr[0].imgUrl 
        imgtd.innerHTML = imgtag
        item2Num.appendChild(imgtd)

        const newtd2 = document.createElement("td")
        newtd2.innerHTML = itemsArr[0].name
        item2Name.appendChild(newtd2)

        const newtd3 = document.createElement("td")
        newtd3.innerHTML = itemsArr[0].description
        item2Des.appendChild(newtd3)

        const newtd4 = document.createElement("td")
        newtd4.innerHTML = itemsArr[0].price
        item2Price.appendChild(newtd4)
        ///////////////////////////////////////////////////////////////////////////////////////////
    })
    .catch(function(err) {
        console.log(err)
    })  

///////////////////////////////comeback to this later//////////////////////////////////////////////
// axios.get('http://localhost:3000/seller')
//     .then(function(response) {
//         console.log(response)
//     })
//     .catch(function(err) {
//         console.log(err)
// })
////////////////////////////////////////////////////////////////////////////////////////////////////


