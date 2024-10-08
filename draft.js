// Class definitions
class DraftPool {
    constructor() {
        this.pool = [];
    }

    addPerson(person) {
        this.pool.push(person);
    }

    getPool() {
        return this.pool;
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.athletePicks = [];
    }

    addAthletePick(athletePick) {
        this.athletePicks.push(athletePick);
    }
}



// Create a new DraftPool instance


// Step 1: Add People to the Draft Pool
document.addEventListener("DOMContentLoaded", function () {
   
    const personCount = 3;
    addPersonButton.addEventListener("click", function () {

        personCount++;
        const newPersonField1 = document.createElement("div");
        const newPersonField2 = document.createElement("div");
        newPersonField1.innerHTML = `<label for="personName${personCount}">Person</label>`;
        newPersonField2.innerHTML = `<input type="text" id="personName${personCount}" name="personName${personCount}" required>`;
        const form = document.getElementById('addPeopleForm');
        const addPersonButton = document.getElementById('addPersonButton');

        form.insertBefore(newPersonField1, addPersonButton);
        form.insertBefore(newPersonField2, addPersonButton);
        
        

    });


    const person1 = new Person("cj");
    const person2 = new Person("joe");
    const draftPool = new DraftPool();

    person1.addAthletePick("ath1");
    person1.addAthletePick("ath2");
    person2.addAthletePick("ath3");
    person2.addAthletePick("ath4");

    draftPool.addPerson(person1);
    draftPool.addPerson(person2);

    for (let i = 0; i < draftPool.getPool().length; i++) {

        console.log(draftPool.getPool()[i].name);
        console.log(draftPool.getPool()[i].athletePicks);
    }

    // createPoolButton.addEventListener("click", function () {
    //     const personName = document.getElementById("personName").value.trim();
        
    //     if (personName !== "") {
    //         const newPerson = new Person(personName);
    //         draftPool.addPerson(newPerson);
    //     } else {
    //         alert("Please enter a valid name.");
    //     }
    // });

    // function updatePoolTable(pool, tableId) {
    //     // Get the table body element
    //     const leaderboardBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    //     leaderboardBody.innerHTML = ""; // Clear any existing rows

    //     // Populate the leaderboard table
    //     pool.forEach((Person) => {
    //         const row = leaderboardBody.insertRow();
    //         const cellName = row.insertCell(0);

    //         cellName.textContent = Person.name;
    //     });
    // }

    
});