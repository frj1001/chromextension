var myLeads = []
const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delEl = document.getElementById("del-btn")
const tabEl = document.getElementById("tab-btn")


const leadslocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadslocalStorage){
    myLeads = leadslocalStorage
    render(myLeads)
}


tabEl.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
})

delEl.addEventListener("click",function(){
    localStorage.clear()
    myLeads = []
    ulEl.innerHTML = ""
})


buttonEl.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
})




function render(leads){
    var listItems = ""
    for(var i=0; i<leads.length; i++){
        //listItems += "<li><a href='"+myLeads[i]+"' target='_blank'>"+ myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
        </li>
        `
        // var li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

const recipient = "Farhaj"
const email = `Hey ${recipient}! How is it going? Cheers Junaid`

