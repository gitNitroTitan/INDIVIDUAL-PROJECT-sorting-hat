      //student array
const students =[ 
 { id: 1,
  name: 'Harry Potter',
  house: 'Gryffendor',
  expelled : false
  },
 { id: 2,
   name: 'Newt Scammander',
   house: 'Hufflepuff',
   expelled : false
  },
 { id: 3,
   name: 'Luna Lovegood',
   house: 'Ravenclaw',
   expelled : false
  },
 { id: 4,
   name: 'Draco Malfoy',
   house: 'Slytherin',
   expelled : false
  },
  { id: 5,
    name: 'Tom Riddle',
    house: 'Slytherin',
    expelled : true
   } ]
    //stores new students
   const newStudents = [];
   //will house expelled student array
   const voldArmy = [];
        //houses array    
    const houseSort =[{
      house: 'Gryffendor',
      houseImage: './images.gryffendor.jpg'

    },
    { house:'Ravenclaw',
       houseImage: './images.ravenclaw.jpg'
    },
    { house:'Hufflepuff',
      houseImage: './images.hufflepuff.jpg'
    },
    { house: 'Slytherin',
      houseImage: './images.slytherin.jpg'
    } ]
    // const item = houseSort[Math.floor(Math.random() * houseSort.length)]; //add this function to form?
      //utility function
    const renderToDom = (divId, textToRender) => {
      const selectedElement = document.querySelector(divId);
      selectedElement.innerHTML = textToRender;
    };

      //empty domString
 let domString=''; 
 let domStringExpelled ='';

      //welcome card
 const welcomeCard  = () => {   
 
  domString = `
      <div class="sortingCard" style="width: 65rem;">
      <h1 class="welcome-title">Welcome To Hogwarts</h1>
      <div class="welcome-body">
      <p class="card-text">Welcome, welcome, one and all! The show's about to start! I'm the Hogwarts Sorting Hat and it's time to play my part. You may call me worn and ragged... if that's all you truly see... but listen close and I will tell where you're supposed to be. Go ahead and try me on. There's nothing left to fear, I'll find right where you belong by looking between your ears!</p>
      <p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBegin" aria-expanded="false" aria-controls="collapseBegin">
        Begin
        </button>
      </p>
      <form>
      <div class="collapse" id="collapseBegin">
          <div class="card input-body">
          <div class="col-auto">
          <label for="inputName" class="visually-hidden">inputName</label>
          <input type="text" class="form-control" id="inputName" placeholder=" Enter First Year's Name to Be Sorted!">
          <div class="col-auto">
          <button type="submit" onclick="sortStudents()" class="btn btn-primary mb-3">Sort to House?</button>
            </div>
          </div>
        </div>
        </div>
      </form>
    </div>
  </div>`;

  
renderToDom('#welcomeContainer', domString);
   } 
const indStudent = document.querySelector("#indStudent");  
const filterButtons = () => {
  domString=`
  <div class="d-flex flex-wrap justify-content-between my-3">
    <button id="gryffendor-btn" class="btn btn-primary" type="button">Gryffendor</button>
    <button id="hufflepuff-btn" class="btn btn-primary" type="button">Hufflepuff</button>
    <button id="ravenclaw-btn" class="btn btn-primary" type="button">Ravenclaw</button>
    <button id="slytherin-btn" class="btn btn-primary" type="button">Slytherin</button>
    <button id="clear-btn" class="btn btn-primary" type="button">All</button>
    <button id="voldy-btn" class="btn btn-primary" type="button">Voldys Crew</button>
  </div>
  `;
renderToDom('#filterContainer', domString); 
}

const studentsId = () =>{
  students.forEach((indStudent,index) => {
    return indStudent.id = index + 1;  
   });
  };
  console.log(students);

  const cardsOnDom = (array) =>{
    let domString =""; 
    // if(indStudent.delete === false){ 
    for (const indStudent of array) {
      domString += `
      <div class="domCard1" text-center">
      <header><h2 class="card-title">First Year</h2></header>
      <hr>
      <div class="card-body">
      <p class="student-name">${indStudent.name}</p>  
      <hr>
      <p class="student-house">${indStudent.house}</p>
      <hr>
      <img class="card-img-top1" src="./assets/images/hogwarts-logo.png" class="card-img-top" alt="#">
        </div> 
        <div>
        <button class="btn btn-danger" id="delete--${indStudent.id}">Expel</button>
      </div>
    </div>`;
      // }
   renderToDom('#addStudentContainer',domString);
    }
    const voldyOnDom = (array) =>{
      let domStringExpelled =""; 
      for (const exStudent of array){
    
        evilDomString += `<div class="domCard2" text-center">
        <header><h2 class="card-title">Student</h2></header>
        <hr>
        <div class="card-body">
        <p class="student-name">${exStudent.name}</p>
        <hr>
        <img class="card-img-top2" src="./assets/images/death-eater-mask.jpg" alt="Evil Has No Undoing...">
          </div> 
      </div>`
      }
      }
    renderToDom("#voldemortsArmy", domStringExpelled);
    }

const hide = () => {
  document.getElementById('addStudentContainer').style.display ="none";
}
const show = () => {
  document.getElementById('addStudentContainer').style.display ="";
}

const form =() => {
  let domString = `      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBegin" aria-expanded="false" aria-controls="collapseBegin">
  Begin
  </button>
</p>
<form>
<div class="collapse" id="collapseBegin">
    <div class="card input-body">
    <div class="col-auto">
    <label for="inputName" class="visually-hidden">inputName</label>
    <input type="text" class="form-control" id="inputName" placeholder=" Enter First Year's Name to Be Sorted!">
    <div class="col-auto">
    <button type="submit" onclick="sortStudents()" class="btn btn-primary mb-3">Sort to House?</button>
      </div>
    </div>
  </div>
  </div>
</form>`
renderToDom('#addStudentContainer', domString);
}

//Sort form code
//  const form = document.querySelector('form');
//   form.addEventListener('submit', (e) => {
//     e.preventDefault(); // this goes in EVERY form submit to prevent page reload
//  const newStudentObj = {  
//   name: document.querySelector('#name').value,
//   imageUrl: document.querySelector('#imageUrl').value,

//  }


  const eventListeners = () => {
  // const sortedFunction = () =>{
    document.querySelector('#filterContainer').addEventListener('click', (e) => {
  
    if (e.target.id === "clear-btn") {
      cardsOnDom(students);

    } else if (e.target.id === 'gryffendor-btn') {
        cardsOnDom(students.filter((firstYear) => firstYear.house=== 'Gryffendor'));
      
    } else if (e.target.id === "ravenclaw-btn") {
      cardsOnDom(students.filter((firstYear) => firstYear.house==='Ravenclaw'));

    } else if (e.target.id === "hufflepuff-btn") {
      cardsOnDom(students.filter((firstYear) => firstYear.house==='Hufflepuff'));
    
     } else if (e.target.id === "slytherin-btn") {
      cardsOnDom(students.filter((firstYear) => firstYear.house==='Slytherin'));

     } else if (e.target.id === "voldy-btn") {
        cardsOnDom(students.filter((firstYear) => firstYear.house==='Slytherin'));
       }
   });
}

  


    

  
    document.querySelector('#addStudentContainer').addEventListener('click', (e) => {
      if (e.target.id) {
     
    const [, id] = e.target.id.split("--");  
        console.log(e.target.id);
      //find the index of the object in the array
      
    const index = students.findIndex ((taco)=> taco.id === Number(id));
        if (e.target.id.includes('delete')) { //checks to see if delete id matches before using splice method
          voldArmy.push(students.splice(index, 1));   
          cardsOnDom(students);
      }
    }
  });

 hide();
 show();
 

//  cardsOnDom(students);
//  students.push(newStudentObj);
//  form.reset();
// });

const startApp = () => {
  welcomeCard();
  filterButtons();
  cardsOnDom(students);
  // findButtons();
  // sortStudents();
  // voldyOnDom();
  studentsId(students);
  eventListeners(); 
  // form();
};
startApp();
