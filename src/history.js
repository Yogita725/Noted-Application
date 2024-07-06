// localStorage.clear();
let notes = JSON.parse(localStorage.getItem('notes'))||[];
let pastDateArr = [];
let histArr = JSON.parse(localStorage.getItem('histArr'))||[];
let histNotes = document.getElementById('histNotes');

    // histArr.push({noteId:1,title: 'Project on React', description: 'Work on React project', date:'Mon July',endDate:'',category:'',isCompleted:false});
    // localStorage.setItem('histArr',JSON.stringify(histArr));
    let today = new Date();
    currentDate = today.toDateString();
    pastDateArr.push(currentDate);

    for(let i=1;i<=7;i++){
        past = new Date(today.getTime() - i *24*60*60*1000 ) ;
        pastDate = past.toDateString();
        pastDateArr.push('');
        pastDateArr.push(pastDate);
    }
    console.log(pastDateArr);


function createHistDiv(){
    histArr = JSON.parse(localStorage.getItem('histArr'))||[];
    
    histArr.forEach(note => {
        let div = document.createElement('div');
        div.classList.add('p-2','w-full', 'mt-4', 'border','border-zinc-700','bg-zinc-700','text-sky-200');
        let h1 = document.createElement('h1');
        h1.innerText = "Title : "+note.title;
        let h2 = document.createElement('h1');
        h2.innerText = "Description : "+note.description;
        let h3 = document.createElement('h1');
        h3.innerText = "Deadline : "+note.endDate;
        let h4 = document.createElement('h1');
        h4.innerText = "Date of creation : "+note.date;

        histNotes.appendChild(div);
        div.appendChild(h1);
        div.appendChild(h2);
        note.endDate!=''?div.appendChild(h3):'';
        div.appendChild(h4);        
    });
}

function createHistory(){
    notes = JSON.parse(localStorage.getItem('notes'))||[];
    histArr = JSON.parse(localStorage.getItem('histArr'))||[];
    let present= false;

    for(let i=0;i<notes.length;i++){
        for(let j=0;j<pastDateArr.length;j++){
            if(notes[i].date == pastDateArr[j]){
                present=true;
                break;
            }
        }
        if(present==false){
            histArr.push(notes[i]);
            notes.splice(i,1);
        }
        present=false;
    }

    localStorage.setItem('histArr',JSON.stringify(histArr));
    localStorage.setItem('notes',JSON.stringify(notes));
    createHistDiv();
}

createHistory();


