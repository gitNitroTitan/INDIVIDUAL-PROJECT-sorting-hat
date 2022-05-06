//student array
const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffendor",
    crest:
      "https://p.kindpng.com/picc/s/474-4746582_harry-potter-gryffindor-baby-bib-cotton-velcro-fastener.png",
    // expelled: false,
  },
  {
    id: 2,
    name: "Newt Scammander",
    house: "Hufflepuff",
    crest: "https://m.media-amazon.com/images/I/71SHyMkX6gL._AC_SL1200_.jpg",
    // expelled: false,
  },
  {
    id: 3,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    crest:
      "https://www.seekpng.com/png/detail/184-1840811_ravenclaw-crest-harry-potter-harry-potter-ravenclaw-house.png",
    // expelled: false,
  },
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin",
    crest:
      "https://p.kindpng.com/picc/s/154-1549411_slytherin-crest-black-and-white-hd-png-download.png",
    // expelled: false,
  },
  {
    id: 5,
    name: "Tom Riddle",
    house: "Slytherin",
    crest:
      "https://p.kindpng.com/picc/s/154-1549411_slytherin-crest-black-and-white-hd-png-download.png",
    // expelled: true,
  },
];
const houses = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
const crest = [
  "https://p.kindpng.com/picc/s/474-4746582_harry-potter-gryffindor-baby-bib-cotton-velcro-fastener.png",
  "https://m.media-amazon.com/images/I/71SHyMkX6gL._AC_SL1200_.jpg",
  "https://www.seekpng.com/png/detail/184-1840811_ravenclaw-crest-harry-potter-harry-potter-ravenclaw-house.png",
  "https://p.kindpng.com/picc/s/154-1549411_slytherin-crest-black-and-white-hd-png-download.png",
];

//will house expelled student array
const voldArmy = [];

// const item = houseSort[Math.floor(Math.random() * houseSort.length)]; //add this function to form?
//utility function
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

//empty domString
let domString = "";
let domString2 = "";

//welcome card
const welcomeCard = () => {
  domString = `
      <div class="sortingCard" style="width: 65rem;">
      <h1 class="welcome-title">Welcome To Hogwarts</h1>
      <div class="welcome-body">
      <p class="card-text">Welcome, welcome, one and all! The show's about to start! I'm the Hogwarts Sorting Hat and it's time to play my part. You may call me worn and ragged... if that's all you truly see... but listen close and I will tell where you're supposed to be. Go ahead and try me on. There's nothing left to fear, I'll find right where you belong by looking between your ears!</p>
      <p>
    </div>
  </div>`;

  renderToDom("#welcomeContainer", domString);
};
const filterButtons = () => {
  domString = `
  <div class="d-flex flex-wrap justify-content-between my-3">
    <button id="gryffendor-btn" class="btn btn-primary" type="button">Gryffendor</button>
    <button id="hufflepuff-btn" class="btn btn-primary" type="button">Hufflepuff</button>
    <button id="ravenclaw-btn" class="btn btn-primary" type="button">Ravenclaw</button>
    <button id="slytherin-btn" class="btn btn-primary" type="button">Slytherin</button>
    <button id="clear-btn" class="btn btn-primary" type="button">All</button>
  </div>
  `;
  renderToDom("#filterContainer", domString);
};

const studentsId = () => {
  students.forEach((indStudent, index) => {
    return (indStudent.id = index + 1);
  });
};

const cardsOnDom = (array) => {
  let domString = "";

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
     
      </div>
      
      <div>
      <p><img src="${indStudent.crest}" class="card-img-top1" alt="crest image"></p>
        </div> 
        <button class="btn btn-danger" id="delete--${indStudent.id}">Expel</button>
    </div>`;
  }
  renderToDom("#addStudentContainer", domString);
};

const voldyOnDom = (array) => {
  let domString2 = "";
  for (const exStudent of array) {
    domString2 += `<div class="domCard2" text-center">
        <header><h2 class="card-title">Student</h2></header>
        <hr>
        <div class="card-body">
        <p class="student-name">${exStudent.name}</p>
        <hr>
        <img class="card-img-top2" src="./assets/images/death-eater-mask.jpg" alt="Evil Has No Undoing...">
          </div> 
      </div>`;
  }

  renderToDom("#voldemortsArmy", domString2);
};

const formInput = () => {
  let domString = `<form class="row g-3">
  <div class="col-auto">
  <label for="staticEmail2" class="visually-hidden">Email</label>
  <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
</div>
<div class="col-auto">
  <label for="fullName" class="visually-hidden">Full Name: </label>
  <input type="name" class="form-control" id="fullName" placeholder="Full Name">
</div>
<div class="col-auto">
  <button type="submit" class="btn btn-primary mb-3">Sort to House</button>
</div>
</form>
`;
  renderToDom("#formContainer", domString);
};

//event listener for filter buttons in a function
const eventListeners = () => {
  document.querySelector("#filterContainer").addEventListener("click", (e) => {
    console.log(e.target.id);
    if (e.target.id === "clear-btn") {
      cardsOnDom(students);
    } else if (e.target.id === "gryffendor-btn") {
      cardsOnDom(
        students.filter((firstYear) => firstYear.house === "Gryffendor")
      );
    } else if (e.target.id === "ravenclaw-btn") {
      cardsOnDom(
        students.filter((firstYear) => firstYear.house === "Ravenclaw")
      );
    } else if (e.target.id === "hufflepuff-btn") {
      cardsOnDom(
        students.filter((firstYear) => firstYear.house === "Hufflepuff")
      );
    } else if (e.target.id === "slytherin-btn") {
      cardsOnDom(
        students.filter((firstYear) => firstYear.house === "Slytherin")
      );
    }
  });
};

const expelToVoldy = () => {
  document
    .querySelector("#addStudentContainer")
    .addEventListener("click", (e) => {
      if (e.target.id) {
        const [, id] = e.target.id.split("--");
        // console.log(e.target.id);

        const index = students.findIndex((taco) => taco.id === Number(id));
        if (e.target.id.includes("delete")) {
          const expelledStudent = students.splice(index, 1);
          voldArmy.push(...expelledStudent);
          voldyOnDom(voldArmy);
          cardsOnDom(students);
        }
      }
    });
};

const newStudent = () => {
  document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * houses.length);
    const newStudentObj = {
      id: students.length + 1,
      name: document.querySelector("#name").value,
      house: houses[random],
      crest: crest[random],
    };
    students.push(document.getElementById("form"));
    cardsOnDom(students);
    studentsId(newStudentObj);

    // newStudent();
    // formInput.reset();
    // renderToDom("#formContainer", domString);
  });
};

const startApp = () => {
  welcomeCard();
  filterButtons();
  cardsOnDom(students);
  studentsId(students);
  eventListeners();
  expelToVoldy();
  formInput();
};
startApp();
