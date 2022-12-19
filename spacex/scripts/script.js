let activeBtn = "Amazon.com";
const buttons = document.getElementsByName("gilakebi");
const inputbutton = document.getElementById("boxes");

class dataItem {
    constructor(id,name,email,boxes){
        this.id = id;
        this.name = name;
        this.email = email;
        this.boxes = boxes;
    }
    addToScreenData () {
        const h3Tag = document.getElementById("companyName");
        const aTag = document.getElementById("companyEmail");
        const boxesinput = document.getElementById("boxes");
        const spanTag = document.getElementById("result");

        h3Tag.innerText = this.name;
        aTag.innerText = this.email;
        boxesinput.value = this.boxes;
        spanTag.innerText = this.calculateRequiredCargo();
    }
    calculateRequiredCargo () {
        let newArr = this.boxes.split(",");
        let result = 0;
        for(i=0; i < newArr.length; i++){
            result += Number(newArr[i]);
        }
        return Math.ceil(result / 10);
    }
}

function setActive(button){
    activeBtn = button.id;
    let btn = document.getElementById(activeBtn);
    for(i=0;i<buttons.length; i++){
        buttons[i].className = 'notActive';
    };
    btn.className = "active";

    fetch("https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json")
    .then(responseObj => responseObj.json(responseObj))
    .then(responseObjData => {
        const foundEl = responseObjData.find((el) => el.name === activeBtn);
        let dataClass = new dataItem(foundEl.id,foundEl.name,foundEl.email,foundEl.boxes);
        dataClass.addToScreenData();
    })
    .catch(fetchError => console.log(fetchError));
}


inputbutton.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        let newArr = inputbutton.value.split(",");
        let result = 0;
        for(i=0; i < newArr.length; i++){
            result += Number(newArr[i]);
        }
        document.getElementById("result").innerText = Math.ceil(result / 10);
    }
});


function addListenersFunc(){
    const listArr = ["Amazon.com", "American Express", "Walmart", "Apple"];

    listArr.forEach((elem)=>{
        document.getElementById(elem).addEventListener("click", (e)=>{
            activeBtn = e.target.id;
            let btn = document.getElementById(activeBtn);
            for(let i=0;i<buttons.length; i++){
                buttons[i].className = 'notActive';
            };
            btn.className = "active";

            fetch("https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json")
    .then(responseObj => responseObj.json(responseObj))
    .then(responseObjData => {
        const foundEl = responseObjData.find((el) => el.name === activeBtn);
        let dataClass = new dataItem(foundEl.id,foundEl.name,foundEl.email,foundEl.boxes);
        dataClass.addToScreenData();
    })
    .catch(fetchError => console.log(fetchError));

        })
    })
}

addListenersFunc();


window.onloadsetActive = (document.getElementById("Amazon.com"));
