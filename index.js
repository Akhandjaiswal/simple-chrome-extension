let leadar = []

const elinput = document.getElementById('input-el')
const elbut1 = document.getElementById('input-btn')
const eldl = document.getElementById('dl-btn')
const elst = document.getElementById('savetab-btn')

const elul = document.getElementById('ul-el')



let leadsFromLocalStorage = JSON.parse( localStorage.getItem("leadar") )

console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    leadar = leadsFromLocalStorage
    render(leadar)
}




elbut1.addEventListener("click", function(){

    leadar.push(elinput.value)
    elinput.value=""

    localStorage.setItem("leadar", JSON.stringify(leadar) )

  render(leadar)

    


})






function render(ardata){
   
    let listItems = ""
    for (let i = 0; i < ardata.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${ardata[i]}'>
                    ${ardata[i]}
                </a>
            </li>
        `
    }
    elul.innerHTML = listItems  
}




eldl.addEventListener("click", function() {
    console.log("dddddddd")
    localStorage.clear()
    leadar = []
    
    render(leadar)
})




elst.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        leadar.push(tabs[0].url)
        localStorage.setItem("leadar", JSON.stringify(leadar) )
        render(leadar)
    })
})


