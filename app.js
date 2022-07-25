let guess = 1;


let clickon = ()=>{
    let main = document.getElementById('main')
    let box = document.getElementById('box')
    let num = +document.getElementById('num').value;
    let error = document.getElementById('error')
    let random = Math.ceil(Math.random()*10);
    


    if (num==random) {
        console.log('you won')
        console.log('you guess in',guess + "attempts");
        box.innerHTML = ''
        main.innerHTML = `<form class="box2 animate__animated animate__fadeInDown">
        <h1 class="h1">YOU WON!</h1>
        <input type="text" readonly value="You guess in ${guess} attempts" id="box2">
        <button class="btn" onclick="playAgain()">Play Again</button>
    </form>`
        return
    }
    else if (num<random) {
        error.innerHTML = `<p class="animate__animated animate__shakeX">You guess a wrong number try again !!</p>`
        setTimeout(()=>{
            error.innerHTML = ""
        },1500)
        guess++;
    }
    else{
        error.innerHTML = `<p class="animate__animated animate__shakeX">You guess a wrong number try again !!</p>`
        setTimeout(()=>{
            error.innerHTML = ""
        },1500)
        guess++
    }
    
}

function playAgain() {
    let main = document.getElementById('main')
    let box2 = document.getElementById('box2');
    box2.innerHTML = "";
    error.innerHTML = ""
    main.innerHTML = `<form onsubmit="clickon();return false" class="box animate__animated animate__fadeInDown" id="box">
    <h1 class="h1">Number Guess Game</h1>
    <div class="flex"><input type="number" id="num" required min="1" max="10" placeholder="Enter a number between 1 to 10">
    <button class="btn" type="submit">Check</button></div>
    <p id="error">You guess a wrong number try again !!</p>
    </form>`
}