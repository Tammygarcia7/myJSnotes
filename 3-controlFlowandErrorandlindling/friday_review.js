//chanllenge: use a for loop, to count form 10-0 going by 1
//For (let i=10; i>=20; i-=1){
//console.log(i);
//}

//for (let i = 0; i = )

// Write a loop that capitalixes the letter of a name, and lowercase the rest of the name
// write what each line is doing
let name = "pUmberkick"; //sets name to a string
console.log(name[7]);
let new_name='';
for (letter in name){
    if (letter==0){
        new_name += name[letter].toUpperCase();
    } else{
        new_name += name[letter].toLowerCase();
    }
    //console.log(letter)
//console.log(name[letter]);
}
console.log(new_name);
