// create a variable for the main group using arrray 
const myTeam = {
    name1: "MY TEAM:",
    mem1: ["Name: Ivan Roi Abellera", "Gender: Male", "Birthdate: July 21, 1999", "Address: Ayudante, Candon City, Ilocos Sur", "Course and Year: BSCS 2C"],
    mem2: ["Name: Tricia Mae Alupani", "Gender: Female", "Birthdate: September 07, 2003", "Address: Tampugo, TAgudin, Ilcos Sur", "Course and Year: BSCS 2C"],
    mem3: [ "Name: Maria Gracielle Tudayan", "Gender: Female", "Birthdate: May 26, 2004", "Address: Patac, Galimuyod, Ilocos Sur", "Course and Year:  BSCS 2C"],
    mem4: ["Name: Angel Villalobos", "Gender: Female", "Birthdate: August 25, 2001", "Address: San Isidro, Candon City, Ilocos Sur", "Course and Year: BSCS 2C"]
};

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(myTeam);
// Parse JSON string back to JavaScript object
const parsedObject = JSON.parse(jsonString);

// Print the result
console.log(parsedObject.name1);
console.log(parsedObject.mem1);
console.log(parsedObject.mem2);
console.log(parsedObject.mem3);
console.log(parsedObject.mem4);


// Create a virable for the next group using array
const nextGroup ={
    name2: "NEXT GROUP:",
    member1: ["Name: Roi Adam Ritual", "Gender: Male", "Birthdate: April 3, 2004", "Address: Darapidap, Candon City, Ilocos Sur", "Course and Year: BSCS 2C"],
    member2: ["Name: Dean Vincent Borje", "Gender: Male", "Birthdate: Oct. 5, 2004", "Address: Saoat, Sta. Cruz, Ilocos Sur", "Course and Year: BSCS 2C"],
    member3: ["Name: Joebert Tababan", "Gender: Male", "Birthdate: Jan. 19, 2004", "Address: Casilagan, Sta. Cruz, Ilocos Sur", "Course and Year: BSCS 2C"],
    member4: ["Name: Aries Jay Paghid", "Gender: Male", "Birthdate: Dec. 10, 2001", "Address: Ubbog, Santiago, Ilocos Sur", "Course and Year: BSCS 2C"],
};

// Convert JavaScript object to JSON string
const JSONString = JSON.stringify(nextGroup);
// Parse JSON string back to JavaScript object
const parsedObj = JSON.parse(JSONString);

// Print the result
console.log(parsedObj.name2);
console.log(parsedObj.member1);
console.log(parsedObj.member2);
console.log(parsedObj.member3);
console.log(parsedObj.member4);