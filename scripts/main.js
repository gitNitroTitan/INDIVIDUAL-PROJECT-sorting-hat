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

        //houses array    
    const houseSort = [
      'Gryffendor',
      'Ravenclaw',
      'Hufflepuff',
      'Slytherin' 
     
    ]
    const item = houseSort[Math.floor(Math.random() * houseSort.length)]; //add this function to form?

      //utility function
    const renderToDom = (divId, textToRender) => {
      const selectedElement = document.querySelector(divId);
      selectedElement.innerHTML = textToRender;
    };

      //empty domString
 let domString=''; 

      //welcome card
 const welcomeCard  = () => {   
 
  domString = `
      <div class="sortingCard" style="width: 65rem;">
      <h1 class="welcome-title">Welcome To Hogwarts</h1>
      <img src="../assets/images/sorting-hat.png" class="card-img-top" alt="Sorting Hat">
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
          <button type="submit" id= "submit-button" class="btn btn-primary mb-3">Sort to House?</button>
            </div>
          </div>
        </div>
        </div>
      </form>
    </div>
  </div>`;

  
renderToDom('#welcomeContainer', domString);
   } 
  const eventListeners = () => {
    // Bootstrap for grabbing modal so can manually open and close
  const formModal = new bootstrap.Modal(document.querySelector('#add-pet'));
  const sortedFunction = () =>{
    document.querySelector('#filterContainer').addEventListener('click', (e) => {
    // ***filter on category (either use .filter or a loop)***
    // rerender DOM with new array (use the cardsOnDom function) 
    // console.log(e);
    if (e.target.id === "clear-btn") {
      cardsOnDom(students);
    } else if (e.target.id === 'gryffendor-btn') {
        // console.log('clicked the cats button', e.target.id); event.target(what was clicked).id 
      cardsOnDom(students.filter((student) => student.house=== 'Gryffendor'));
    } else if (e.target.id === "ravenclaw-btn") {
      // console.log('clicked the cats button', e.target.id);
    cardsOnDom(students.filter((student) => student.house==='Ravenclaw'));
  } else if (e.target.id === "hufflepuff-btn") {
    // console.log('clicked the cats button', e.target.id);
  cardsOnDom(students.filter((student) => student.house==='Hufflepuff'));
     } else if (e.target.id === "slytherin-btn") {
      // console.log('clicked the cats button', e.target.id);
    cardsOnDom(students.filter((student) => student.house==='Slytherin'));
       }
  });
}
  }










 //bubbling=adding an event listener to a container
const indStudent = document.querySelector("#indStudent");  
const filterButtons = () => {
  let domString=`
  <div class="d-flex flex-wrap justify-content-between my-3">
    <button id="gryffendor-btn" class="btn btn-primary" type="button">Gryffendor</button>
    <button id="hufflepuff-btn" class="btn btn-primary" type="button">Hufflepuff</button>
    <button id="ravenclaw-btn" class="btn btn-primary" type="button">Ravenclaw</button>
    <button id="slytherin-btn" class="btn btn-primary" type="button">Slytherin</button>
    <button id="clear-btn" class="btn btn-primary" type="button">All</button>
    <button id="expelled-btn" class="btn btn-primary" type="button">ExPelLeD</button>
  </div>
  `;
renderToDom('#filterContainer', domString); 
}

const studentId = () =>{
  
  students.forEach((student,index) => {
    return student.id = index + 1;  
                         
  });
  };
  console.log(students);  
//stores sorted information on a card on the DOM
const cardsOnDom = (array) =>{
  for (const indStudent of array) {
    domString += `
    <div class="domCard" text-center">
    <header><h5 class="card-title">Student</h5></header>
    <div class="card-body">
    <p class="student-name">${indStudent.name}</p>  
    <p class="student-house">${indStudent.house}</p>
      </div> <div>
      <button class="btn btn-danger" id="expel--${indStudent.id}">Expel</button>
    </div>
      <div class="card-footer footer-for-${indStudent.type}">${indStudent.type}
      </div>
  </div>`;
    }
 renderToDom('#addStudentContainer',domString);
}



  //sorted student card with expulsion button and interpolation
const sortedStudentCard = (array) => {    
  let domString ="";                      
  for (const indStudent of array) {
  domString += `
  <div class="sort-card" text-center">
  <header><h5 class="card-title">${indStudent.name}</h5></header>
  <img src="${indStudent.house}" class="card-img-top" alt="house image">    //this line will need work
  <div class="card-body">
    <p class="student-house">${indStudent.house}</p>
  </div> 
</div>`;
}
renderToDom("#sortedStudent", domString);
}


       //voldemorts army card
// const voldemortArmyCard = (array) => {      
//   let evilDomString ="";
//   for (const bannedStudent of array) {
//     if(bannedStudent.expelled === true){
//       evilDomString += `
//   <div class="card" text-center">
//   <header><h5 class="card-title">${indStudent.name}</h5></header>
//   <img src="${indStudent.house}" class="card-img-top" alt="house image">
//   <div class="card-body">
//     <p class="student-house">${indStudent.house}</p>
//     </div> 
// </div>`;
// }
// }
// renderToDom("#voldemortsArmy", domString);    //renders card to voldy's array on the DOM
// }
    //card to add a new student and randomly sort them
// const createStudentForm = () => {       
//   const domString = `
//   <form>  
//   <div class="form-group">
//     <label for="addStuName">Name</label>
//     <input type="text" class="form-control" id="addStuName" placeholder="First Year's Name">
//   </div>  
//   <button onclick="sortStudents()" type="submit" class="btn btn-danger">Submit</button>
// </form>
//   `;
//   renderToDom('#addStudentContainer', domString);
// };

// const hide = () => {
//   document.getElementById('addStudentContainer').style.display ="none"
// }

document.querySelector('#filterContainer').addEventListener('click', (e) => {
  // check to make sure e.target.id is not empty
  if (e.target.id) {
    // get the name off the button ID
   
    const [, id] = e.target.id.split("--");  
      console.log(e.target.id);
    // find the index of the object in the array
    
    const index = students.findIndex ((taco)=> taco.id === Number(id));
    if (e.target.id.includes('delete')) { //checks to see if delete id matches before using splice method
      students.splice(index, 1);   //uses splice method to delete index [0], and only 1 delete count
    }
  }
});
  // const studentsId = () =>{
  //   students.forEach((indStudent,index) => {
  //     return indStudent.id = index + 1;  
  //    });
  //   };
  // console.log(students);
  //   // const sortStudents = () => {
  //   //   document.getElementById('addStudentContainer').style.display = "";
    // }
      
    
   // FORM SUBMIT
  // const form = document.querySelector('form');
  // form.addEventListener('submit', (e) => {
  //   e.preventDefault(); // this goes in EVERY form submit to prevent page reload 
  
    //new object
  // const newStudentObj = {  
   
  //   id: document.querySelector('#id').value,
  //   name: document.querySelector('#name').value,
  //   house: document.querySelector('#house').value,
  //   expelled: document.querySelector('#expelled').value
  // };

  // indStudent.push(newStudentObj);
  // sortedStudentCard(students);
  // studentsId(newStudentObj);
  
// });
  
const startApp = () => {
  cardsOnDom(students);
  // voldemortArmyCard();
  // createStudentForm();
  filterButtons();
  sortedStudentCard(students);
  welcomeCard();
  eventListeners();
  form.reset();
// studentsId(students);
  form.hide();
};
startApp();
  