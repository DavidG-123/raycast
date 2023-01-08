WebGL2RenderingContext
var pi = Math.PI;
var runStatus = false;
var pa = (0);
var fullDir = 2 * pi;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);
// ctx.clearColor(0.0, 0.0, 0.0, 1.0);
// ctx.clear(ctx.COLOR_BUFFER_BIT);
var keyStates = ['false', 'false', 'false', 'false'];
var px=200, py=200;

function map() {
    var mapX = 8; var mapY = 8; var mapA = 64;

}

function drawPlayer(x,y) {
    switch (String(keyStates[0] + keyStates[1] + keyStates[2] + keyStates[3] + x + y + pa)) {
        case String("truefalsefalsefalse" + x + y + pa) : if (pa < 0) {pa=2*pi}; if (py != 0 && py != 471){if (py >= 0 && py <= 471) {py += trajectAngle(pa, pi)[0]}}; if (px != 0 && px != 631){if (px >= 0 && px <= 631) {px += trajectAngle(pa, pi)[1]}}; break;
        case String("falsetruefalsefalse" + x + y + pa) : if (pa < 0) {pa=2*pi}; if (py != 0 && py != 471){if (py >= 0 && py <= 471) {py -= trajectAngle(pa, pi)[0]}}; if (px != 0 && px != 631){if (px >= 0 && px <= 631) {px -= trajectAngle(pa, pi)[1]}}; break;
        case String("falsefalsetruefalse" + x + y + pa) : if (pa >= fullDir) {pa = (0 + .1)} else {pa += .1}; break;
        case String("falsefalsefalsetrue" + x + y + pa) : if (pa <= 0) {pa = (fullDir - .1)} else {pa -= .1}; break;
        case String("truefalsetruetrue" + x + y + pa) : if (py != 0 && py != 471){if (py >= 0 && py <= 471) {py += trajectAngle(pa, pi)[0]}}; if (px != 0 && px != 631){if (px >= 0 && px <= 631) {px += trajectAngle(pa, pi)[1]}}; break;
        case String("falsetruetruetrue" + x + y + pa) : if (py != 0 && py != 471){if (py >= 0 && py <= 471) {py -= trajectAngle(pa, pi)[0]}}; if (px != 0 && px != 631){if (px >= 0 && px <= 631) {px -= trajectAngle(pa, pi)[1]}}; break;
        case String("truetruetruefalse" + x + y + pa) : if (pa <= 0) {pa = (2*pi - .1)} else {pa -= .1}; break;
        case String("truetruefalsetrue" + x + y + pa) : if (pa >= fullDir) {pa = (0 + .1)} else {pa += .1}; break;
        case String("truefalsetruefalse" + x + y + pa) : if (pa >= fullDir) {pa = (0 + .1)} else {pa += .1}; if (py != 0 && py != 471){if (py >= 0 && py <= 471) {py += trajectAngle(pa, pi)[0]}}; if (px != 0 && px != 631){if (px >= 0 && px <= 631) {px += trajectAngle(pa, pi)[1]}}; break;
        case String("truefalsefalsetrue" + x + y + pa) : if (pa <= 0) {pa = (fullDir - .1)} else {pa -= .1}; if (py != 0 && py != 471){if (py >= 0 && py <= 471) {py += trajectAngle(pa, pi)[0]}}; if (px != 0 && px != 631){if (px >= 0 && px <= 631) {px += trajectAngle(pa, pi)[1]}}; break;
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(px, py, 9, 9);
    console.log((px) + '\n' + (py))

    function collisionDetect(x, y) {
        let fourthCirc = (pi*.5); let halfCirc = (pi); let threequartCirc = (pi*1.5); let fullCirc = (pi*2);
        switch(true) {
            case true : if (px >= 631) {px = 631}; case true : if (px <= 0) {px = 0};
            case true : if (py >= 471) {py = 471}; case true : if (py <= 0) {py = 0};
        }
        switch (true) {
            case true : if (px>=631 && py>0 && py<471 && pa>fourthCirc && pa<threequartCirc){px = 630.75} else if (px>=631) {px = 631};
            case true : if (px<=0 && py>0 && py<471 && pa>fourthCirc && pa<threequartCirc){px = 0} else if (px<=0){px = .25};
            case true : if (py>=471 && px>0 && px<631 && pa>halfCirc && pa<fullCirc){py = 471} else if (py>=471){py = 470.75};
            case true : if (py<=0 && px>0 && px<631 && pa<halfCirc && pa > 0){py = 0} else if (py<=0) {py = .25}
        }
    }
    collisionDetect((px+5),(py+5))
}
let godSpeed = 0;
function loadTick() {
    console.log('hit');
    document.addEventListener('keydown', function(event) {
        if (event.code == 'KeyW') {console.log(); keyStates[0] = 'true'}
        else if (event.code == 'KeyS') {console.log(); keyStates[1] = 'true'}
        else if (event.code == 'KeyA') {console.log(); keyStates[2] = 'true'}
        else if (event.code == 'KeyD') {console.log(); keyStates[3] = 'true'}});

    document.addEventListener('keyup', function(event) {
        if (event.code == 'KeyW') {console.log(); keyStates[0] = 'false'}
        else if (event.code == 'KeyS') {console.log(); keyStates[1] = 'false'}
        else if (event.code == 'KeyA') {console.log(); keyStates[2] = 'false'}
        else if (event.code == 'KeyD') {console.log(); keyStates[3] = 'false'}});
    
    if (runStatus == false) {
        setInterval(advanceTick ,33);
    }
    runStatus = true;
}
function trajectAngle(currentAng, PI) {
    let fourthCirc = (PI*.5); let halfCirc = (PI); let threequartCirc = (PI*1.5); let fullCirc = (PI*2);
    if (currentAng >= 0 && currentAng <= fullCirc) {
        if (pa < fourthCirc) {var playerXmove =((fourthCirc-pa)*(100/fourthCirc));var playerYmove = ((100 - playerXmove)); return [((-playerYmove*.01)*3),((playerXmove*.01)*3)]}
        else if (pa > fourthCirc && pa < halfCirc) {let pAlt = (pa-fourthCirc); var playerXmove =((fourthCirc-pAlt)*(100/fourthCirc));var playerYmove = ((100 - playerXmove)); return [((-playerXmove*.01)*3),((-playerYmove*.01)*3)]}
        else if (pa > halfCirc && pa < threequartCirc) {let pAlt = (pa-halfCirc); var playerXmove =((fourthCirc-pAlt)*(100/fourthCirc));var playerYmove = ((100 - playerXmove)); return [((playerYmove*.01)*3),((-playerXmove*.01)*3)]}
        else if (pa > threequartCirc) {let pAlt = (pa-threequartCirc); var playerXmove =((fourthCirc-pAlt)*(100/fourthCirc));var playerYmove = ((100 - playerXmove)); return [((playerXmove*.01)*3),((playerYmove*.01)*3)]}
        else if (pa == fullCirc || pa == 0) {return [0,3]} else if (pa == fourthCirc) {return [-3,0]} else if (pa == halfCirc) {return [0,-3]} else if (pa == threequartCirc) {return [3,0]}
    }
}

function advanceTick() {
    godSpeed = godSpeed += 1;
    console.log(pa);
    //console.log(String(keyStates[0] + keyStates[1] + keyStates[2] + keyStates[3]))
    
    drawPlayer(px, py);
    
    //document.getElementById("frames").innerHTML = String(godSpeed + '\n' + 'sec: ' + (Math.floor(godSpeed/30)) + ' | ' + (godSpeed / (godSpeed/30)));
}
// console.log(String(godSpeed + '\n' + 'sec: ' + (Math.floor(godSpeed/30)) + ' | ' + Math.floor(godSpeed / (godSpeed/30)) + '\n' + ctx));