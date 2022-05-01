
const students =[ 
 { id: 1,
  name: 'Harry',
  house: 'Gryffendor',
  expelled : false
  },
 { id: 2,
   name: 'Jane',
   house: 'Hufflepuff',
   expelled : false
  },
 { id: 3,
   name: 'Tom',
   house: 'Ravenclaw',
   expelled : false
  },
 { id: 4,
   name: 'Draco',
   house: 'Slitherin',
   expelled : true
  }]

    //houses array    
    const houseSort = [ 
      'Gryffendor',
      'Ravenclaw',
      'Hufflepuff',
      'Slytherin'
    ]
    //utility function
    const renderToDom = (divId, textToRender) => {
      const selectedElement = document.querySelector(divId);
      selectedElement.innerHTML = textToRender;
    };

    const createStudentForm = () => {
      const domString = `
      <p>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Button with data-target
    </button>
  </p>
  <div class="collapse" id="collapseExample">
    <div class="card card-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
      `;
      renderToDom('#addStudentContainer', domString);
    };


 let domString='';
 
 const welcomeCard  = ()=> {
 
  domString += `
      <div class="sortingCard" style="width: 18rem;">
      <h5 class="card-title">Welcome To Hogwarts</h5>
      <img src="../assets/images/sorting-hat.png" class="card-img-top" alt="Sorting Hat">
      <div class="card-body">
      <p class="card-text">Welcome, welcome, one and all! The show's about to start! I'm the Hogwarts Sorting Hat and it's time to play my part. You may call me worn and ragged... if that's all you truly see... but listen close and I will tell where you're supposed to be. Go ahead and try me on. There's nothing left to fear, I'll find right where you belong by looking between your ears!</p>
      <a href="#" class="btn btn-danger">Sort to House!</a>
    </div>
  </div>`

renderToDom('#welcomeContainer', domString);
   } 
const indStudent = document.querySelector("#indStudent");   //bubbling=adding an event listener to a container



const cardsOnDom = (array) => {
  let domString ="";
  for (const indStudent of array) {
  domString += `
  <div class="card" text-center">
  <header><h5 class="card-title">${indStudent.name}</h5></header>
  <img src="${indStudent.image}" class="card-img-top" alt="house image">
  <div class="card-body">
    <p class="student-house">${indStudent.house}</p>
    </div> 
    <div>
    <a href="#" class="btn btn-danger" id="delete--${indStudent.id}">Expel from Hogwarts</a
  </div> 
</div>`;
}
}

const eventListeners = () => {
  //work on this next//
  const formModal = new bootstrap.Modal(document.querySelector('#add-student'));
}

document.querySelector('#filterContainer').addEventListener('click', (e) => {
  // check to make sure e.target.id is not empty
  if (e.target.id) {
    // get the name off the button ID
    const [, id] = e.target.id.split("--");  
      console.log(e.target.id);
    // find the index of the object in the array
    const index = students.findIndex ((taco)=> taco.id === Number(id));

  }


  



  const newStudentObj = {  
   
    id: document.querySelector('#id').value,
    name: document.querySelector('#name').value,
    house: document.querySelector('#house').value,
    expelled: document.querySelector('#expelled').value
  };

  students.push(newStudentObj);
  cardsOnDom(students);
  studentsId(newStudentObj);
  formModal.hide();
  form.reset();
});

const startApp = () => {
  createStudentForm();
  cardsOnDom(students);
  welcomeCard();
  eventListeners();

}
startApp();
