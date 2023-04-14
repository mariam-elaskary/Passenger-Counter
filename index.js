// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0
let counter = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    counter.innerText = count
}

function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let count1 = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerHTML += count1
    counter.innerHTML = 0
    count = 0

}
