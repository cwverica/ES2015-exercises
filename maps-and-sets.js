// Quick Question #1
// What does the following code return?

new Set([1,1,2,2,3,4])

// It returns the set: 
// {1, 2, 3, 4}



// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("")

// it returns the string:
// "ref"




// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// m = {
    // [1,2,3]: true,
    // [1,2,3]: false
// }




// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr) {
    const newSet = new Set(arr);
    if(arr.length === newSet.size){
        return false;
    } else return true;
}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false



// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount (input) {
    const count = new Map();
    const vowels = [...input].filter((char) => ('aeiou'.indexOf(char) >= 0));
    for(vowel of vowels){
        if(count.get(vowel)){
            let addition = (count.get(vowel) + 1);
            count.set(vowel, addition);
        } else {
            count.set(vowel, 1);
        }
    }
    return count;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }