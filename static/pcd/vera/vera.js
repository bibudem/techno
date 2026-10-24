
var w, h
var cnv

function setup() {
    w = 900
    h = 900
    cnv = createCanvas(w, h)
    centerCanvas();
    colorMode(HSB, 360, 100, 100, 250);
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
}


function draw() {
    background(0, 0, 100)
    vera()
    noLoop()
}

function vera() {
    noStroke()
    fill(0, 100, 100)
    let x, y, espace, taille, resolution,decalage
    decalage=7
    resolution = 5
    taille = w / resolution
    espace = taille * 0.05
    for (let i = 0; i < resolution; i++) {
        x = i*taille
        for (let j = 0; j < resolution; j++) {
            y=j*taille
            x=x+random(-decalage,decalage)
            y=y+random(-decalage,decalage)
            quad(x + espace, y + espace,
                x + taille -espace, y + espace,
                x + taille-espace, y + taille-espace,
                x + espace, y+ taille-espace
            )
        }
    }
}