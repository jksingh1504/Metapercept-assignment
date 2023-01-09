async function display_data() {

    try{
        const result = await fetch("http://localhost:8080/data")
        const data = await result.json()
        let container=document.getElementById("classes_data")
    
        
        let classes=data.map(ele=>`
        
        <img
          src=${"https://th.bing.com/th/id/OIP.4d7Emr_d4fJnEE6zK7pj_wHaFK?pid=ImgDet&rs=1"}
          alt="dummy_img"
        />
        <div class="card_details">
          <h3>${ele.Name}</h3>
          <div class="description">
            ${ele.ShortDesc}
          </div>
          <button>Veiw</button>
        </div>
     
        `)
        classes.forEach(ele=>{
            let div=document.createElement("div");
            div.setAttribute("class","card")
            div.innerHTML=ele
            container.append(div)
        })

        console.log(container)
    }
    catch(err){
        console.log(err)
    }


}

display_data()
