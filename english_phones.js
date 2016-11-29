//stops

var stops = {
bilabial: {voiceless: "p", voiced: "b"}, 
labiodental: {voiceless: null, voiced: null}, 
dental: {voiceless: null, voiced: null}, 
alveolar: {voiceless: "t", voiced: "d"}, 
postalveolar: {voiceless: null, voiced: null}, 
retroflex: {voiceless: null, voiced: null}, 
palatal: {voiceless: null, voiced: null}, 
velar: {voiceless: "k", voiced: "g"},
glottal: {voiceless: "?", voiced: null},
uvular: {voiceless: null, voiced: null},
pharyngeal: {voiceless: null, voiced: null}
}

var fricatives = {
bilabial: {voiceless: null, voiced: null}, 
labiodental: {voiceless: "f", voiced: "v"}, 
dental: {voiceless: "theta", voiced: "eth"}, 
alveolar: {voiceless: "s", voiced: "z"}, 
postalveolar: {voiceless: "esh", voiced: "zy"}, 
retroflex: {voiceless: null, voiced: null}, 
palatal: {voiceless: null, voiced: null}, 
velar: {voiceless: null, voiced: null},
glottal: {voiceless: "h", voiced: null},
uvular: {voiceless: null, voiced: null},
pharyngeal: {voiceless: null, voiced: null}
}

var affricates = {
bilabial:  {voiceless: null, voiced: null}, 
labiodental: {voiceless: null, voiced: null}, 
dental: {voiceless: null, voiced: null}, 
alveolar: {voiceless: null, voiced: null}, 
postalveolar: {voiceless: null, voiced: null}, 
retroflex: {voiceless: null, voiced: null}, 
palatal: {voiceless: null, voiced: null}, 
velar: {voiceless: null, voiced: null}, 
glottal: {voiceless: null, voiced: null}, 
uvular: {voiceless: null, voiced: null},
pharyngeal: {voiceless: null, voiced: null}
}

var nasals  = {
bilabial: {voiceless: "p", voiced: "b"}, 
labiodental: {voiceless: null, voiced: null}, 
dental: {voiceless: null, voiced: null}, 
alveolar: {voiceless: "t", voiced: "d"}, 
postalveolar: {voiceless: null, voiced: null}, 
retroflex: {voiceless: null, voiced: null}, 
palatal: {voiceless: null, voiced: null}, 
velar: {voiceless: "k", voiced: "g"},
glottal: {voiceless: "?", voiced: null},
uvular: {voiceless: null, voiced: null},
pharyngeal: {voiceless: null, voiced: null}
}

var trills  = {
bilabial: {voiceless: "p", voiced: "b"}, 
labiodental: {voiceless: null, voiced: null}, 
dental: {voiceless: null, voiced: null}, 
alveolar: {voiceless: "t", voiced: "d"}, 
postalveolar: {voiceless: null, voiced: null}, 
retroflex: {voiceless: null, voiced: null}, 
palatal: {voiceless: null, voiced: null}, 
velar: {voiceless: "k", voiced: "g"},
glottal: {voiceless: "?", voiced: null},
uvular: {voiceless: null, voiced: null},
pharyngeal: {voiceless: null, voiced: null}
}

var laterals  = {
bilabial:  {voiceless: null, voiced: null}, 
labiodental: {voiceless: null, voiced: null}, 
dental: {voiceless: null, voiced: null}, 
alveolar: {voiceless: null, voiced: null}, 
postalveolar: {voiceless: null, voiced: null}, 
retroflex: {voiceless: null, voiced: null}, 
palatal: {voiceless: null, voiced: null}, 
velar: {voiceless: null, voiced: null}, 
glottal: {voiceless: null, voiced: null}, 
uvular: {voiceless: null, voiced: null},
pharyngeal: {voiceless: null, voiced: null}
}

var blank = {
bilabial:  {voiceless: null, voiced: null}, 
labiodental: {voiceless: null, voiced: null}, 
dental: {voiceless: null, voiced: null}, 
alveolar: {voiceless: null, voiced: null}, 
postalveolar: {voiceless: null, voiced: null}, 
retroflex: {voiceless: null, voiced: null}, 
palatal: {voiceless: null, voiced: null}, 
velar: {voiceless: null, voiced: null}, 
glottal: {voiceless: null, voiced: null}, 
uvular: {voiceless: null, voiced: null},
pharyngeal: {voiceless: null, voiced: null}
}

var phones = [stops, fricatives, affricates, nasals, trills, laterals]; 
