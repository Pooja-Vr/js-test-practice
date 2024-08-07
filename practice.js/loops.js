// for loop 
// for(let i=0; i < Array.length; i++){
//     const element=i;
//     console.log(element);
// }
// if I try to print the element after the block then I'll get an error

// console.log(element);



// now we use "if conditon into for loop"
for(let i = 0; i <= 10; i++){
    const element = i;
    if(element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
}

// nested for loop
for(let i = 0; i<= 10; i++){
    console.log(`outer loop value:${i}`);
    for(let j = 0; j <= 10; j++){
        console.log(`inner loop value: ${j}`);
    }
}