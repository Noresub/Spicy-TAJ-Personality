function slaveNameVocabulary() {
    var answers = ["slave",
        "slave",
        "slave",
        "slave",
        "slave",
        "slave",
        "slave",
        "slave",
        "slave",
        "slave",
        "slave",
        "slave",
        "slut",
        "pathetic slave",
        "cum eater",
        "cum consumer",
        "cum bucket",
        "pathetic boy",
        "cocksucker",
        "cock craving cum slut",
        "cock craving slave",
        "cock lover",
        "cum lover",
        "bitch boy",
        "bitch",
        "bitch toy",
        "cuckie",
        "cuckold",
        "slave slut",
        "cum sucker",
        "cream boy",
        "filthy boy",
        "small dick slave",
        "small dick bitch boy",
        "idiot",
        "worthless shit",
        "worthless idiot",
        "worthless boy",
        "worthless slut",
        "worthless bitch",
        "worthless girl",
        "worthless cuckie",
        "worthless cuckold",
        "cum market",
        "cum cow",
        "disgusting slave",
        "disgusting slut",
        "disgusting bitch",
        "tiny dick loser",
        "loser",
        "disgusting loser",
        "worthless loser",
        "slut",
        "slut",
        "slut",
        "slut",
        "slut",
        "slut",
        "slut",
        "slut",
        "slut",
        "slut",
        "slut",
        "slut",
        "slut",
        "slut",
        "slut",
        "girl",
        "girl",
        "girl",
        "girl",
        "girl",
        "girl",
        "girl",
        "girl",
        "girl",
        "girl",
        "girl",
        "girl",
        "girl",
        "girl",
        "girl",
        "sexy girl",
        "sexy slut",
        "sexy slut",
        "sexy slut",
        "sexy slut",
        "sexy slut",
        "sexy slut",
        "bitch",
        "bitch",
        "bitch",
        "bitch",
        "bitch",
        "bitch",
        "bitch",
        "hot slut",
        "hot girl",
        "pathetic girl",
        "pathetic slut",
        "cum craving slut",
        "cum craving girl",
        "cum eating slut",
        "cum eating girl",
        "nasty girl",
        "nasty slut",
        "naughty girl",
        "naughty slut",
        "cum dripping slut",
        "cum dripping girl",
        "disgusting slut",
        "disgusting slut",
        "stupid girl",
        "stupid slut",
        "bitch",
        "stupid bitch",
        "naughty bitch",
        "disgusting bitch",
        "cum dripping bitch",
        "nasty bitch",
        "cum craving bitch",
        "sexy bitch",
        "filthy bitch",
        "filthy slut",
        "filthy girl"];

    if(getVar(VARIABLE_CHASTITY_ON)) {
        answers.push("secured cuckie", "chained up boy", "secured slave", "locked slave", "locked cum consumer", "locked cream boy", "secured idiot");
        answers.push("locked up slut", "locked up girl", "caged slut", "secured slut", "caged girl", "secured girl");
    }

    if(getVar(VARIABLE_LINGERIE_ON)) {
        answers.push("dressed up slut", "dressed up girl", "lingerie covered slut", "lingerie covered girl");
    }

    return answers[randomInteger(0, answer.length -1)];
}