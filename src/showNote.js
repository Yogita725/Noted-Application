let notes = JSON.parse(localStorage.getItem('notes')) || [];
let pastDateArr = [];
let currentDate ;
let firstQuad = document.querySelector('#firstQuad');
let secondQuad = document.querySelector('#secondQuad');
let thirdQuad = document.querySelector('#thirdQuad');
let fourthQuad = document.querySelector('#fourthQuad');


let notesAlert = document.getElementById("notesAlert");
if(notes[0].date == ''){
    notesAlert.classList.remove("hidden");
}

function getSelectedDate(selectedDate){
    let urgentArr = notes.filter((note)=>note.date === selectedDate).filter((note)=>note.category == 'urgent');
    console.log(urgentArr);
    let strategyArr = notes.filter((note)=>note.date === selectedDate).filter((note)=>note.category == 'strategy');
    console.log(strategyArr);
    let wellbeingArr = notes.filter((note)=>note.date === selectedDate).filter((note)=>note.category == 'wellbeing');
    console.log(wellbeingArr);
    let dailyArr = notes.filter((note)=>note.date === selectedDate).filter((note)=>note.category == 'daily');
    console.log(dailyArr);

    urgentArr.forEach((note) => {
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let br = document.createElement("br");
        h1.innerText=note.title + " : " + note.description;
        h2.innerText = "Deadline : " + note.endDate;
        firstQuad.appendChild(h1);
        note.endDate!=''? firstQuad.appendChild(h2):"";
        firstQuad.appendChild(br);
    });

    strategyArr.forEach((note) => {
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let br = document.createElement("br");
        h1.innerText=note.title + " : " + note.description;
        h2.innerText = "Deadline : " + note.endDate;
        secondQuad.appendChild(h1);
        note.endDate!=''? secondQuad.appendChild(h2):"";
        secondQuad.appendChild(br);
    });

    wellbeingArr.forEach((note) => {
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let br = document.createElement("br");
        h1.innerText=note.title + " : " + note.description ;
        h2.innerText = "Deadline : " + note.endDate;
        thirdQuad.appendChild(h1);
        note.endDate!=''? thirdQuad.appendChild(h2):"";
        thirdQuad.appendChild(br);
    });

    dailyArr.forEach((note) => {
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let br = document.createElement("br");
        h1.innerText=note.title + " : " + note.description ;
        h2.innerText = "Deadline : " + note.endDate;
        fourthQuad.appendChild(h1);
        note.endDate!=''? fourthQuad.appendChild(h2):"";
        fourthQuad.appendChild(br);
    });
}

function addHeading(){
    let heading1 = document.createElement('h1');
    heading1.innerText = 'URGENT PRIORITIES';
    heading1.classList.add('font-bold', 'text-lg', 'text-sky-200');
    firstQuad.appendChild(heading1);

    let heading2 = document.createElement('h1');
    heading2.innerText = 'STRATEGIC PLANNING';
    heading2.classList.add('font-bold', 'text-lg', 'text-zinc-700');
    secondQuad.appendChild(heading2);

    let heading3 = document.createElement('h1');
    heading3.innerText = 'WELLBEING ROUTINE';
    heading3.classList.add('font-bold', 'text-lg', 'text-zinc-700');
    thirdQuad.appendChild(heading3);

    let heading = document.createElement('h1');
    heading.innerText = 'DAILY ESSENTIALS';
    heading.classList.add('font-bold', 'text-lg', 'text-sky-200');
    fourthQuad.appendChild(heading);
}

function getPasteDate(){
    let today = new Date();
    currentDate = today.toDateString();
    pastDateArr.push(currentDate);

    for(let i=1;i<=7;i++){
        past = new Date(today.getTime() - i *24*60*60*1000 ) ;
        pastDate = past.toDateString();

        pastDateArr.push(pastDate);
    }
    
    console.log(pastDateArr);

    let selectDate = document.querySelector('#selectDate');
    selectDate.innerHTML = `
            <label for="date" class='font-semibold text-lg text-zinc-700'>Select the date : </label>

            <select name="date" id="date" class='p-2 m-2 focus:outline-none'>
                <option value="null" class='text-sm text-gray-400'>Select date</option>
                <option value=${pastDateArr[0]}>${pastDateArr[0]}</option>
                <option value=${pastDateArr[1]}>${pastDateArr[1]}</option>
                <option value=${pastDateArr[2]}>${pastDateArr[2]}</option>
                <option value=${pastDateArr[3]}>${pastDateArr[3]}</option>
                <option value=${pastDateArr[4]}>${pastDateArr[4]}</option>
                <option value=${pastDateArr[5]}>${pastDateArr[5]}</option>
                <option value=${pastDateArr[6]}>${pastDateArr[6]}</option>
                <option value=${pastDateArr[7]}>${pastDateArr[7]}</option>            
               </select>`
    
               let date = document.getElementById("date");
               
                date.addEventListener('change', function() {
                    firstQuad.innerHTML = '';
                    secondQuad.innerHTML='';
                    thirdQuad.innerHTML='';
                    fourthQuad.innerHTML='';
                    addHeading();
                    let selectedDate = date.options[date.selectedIndex].text;
                    getSelectedDate(selectedDate);
                })

}

getPasteDate();
