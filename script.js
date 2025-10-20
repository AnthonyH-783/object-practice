/**
 * You have an array of user objects, each one has user.name.
 *  Write the code that converts it into an array of names.
For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = some function

alert( names ); // John, Pete, Mary
 */

let extractNames = (obj_list) => {
    let list = new Array();
    for(let person of obj_list){ // Looping through each user
        if("name" in person){
            list.push(person["name"]); // Adding name characteristic if found
        }
        else{
            console.error("A user without a name has been found");
        }
    }
    return list;
}
/**
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = extractNames(users); */
//console.log(names);

/**
 * You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName,
where fullName is generated from name and surname.
For instance:
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

let convertToFullNameObjects = (users) => {

    let user_mapped = users.map((user) => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id,
    }));
    return user_mapped;
    
}
/** 
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let usersMapped = convertToFullNameObjects(users);
console.log(usersMapped);*/