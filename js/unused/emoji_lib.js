class emoji {
    constructor(ucode, emoji, num) {
        this.ucode = "U+1F" + ucode
        this.emoji = emoji
        this.num = num
    }
}

class face_emoji extends emoji {
    constructor(ucode, emoji, num) {
        this.u = "U+1F" + ucode
        this.emoji = emoji
        this.num = num
        this.type = "face"
    }
}

class item_emoji extends emoji {
    constructor(ucode, emoji, num) {
        this.ucode = ucode
        this.emoji = emoji
        this.num = num
        this.type = "item"
    }
}

let names = []
let faces = new Object();

let loadNames=()=> {
    names = ["grinning_face",
        ">_with_big_eyes",
        ">_with_smiling_eyes",
        ">_with_sweat",
        "beaming_face_with_smiling_eyes",
        "grinning_squinting_face",
        "rolling_on_the_floor_laughing",
        "slightly_smiling_face",
    ]
}

let loadFaces=()=> {
    faces["grinning_face"] = new face_emoji("600", "😀", 1);
    faces["grinning_face_with_big_eyes"] = new face_emoji("603", "😃", 2);
    faces["grinning_face_with_smiling_eyes"] = new face_emoji("604", "😄", 3);
    faces["beaming_face_with_smiling_eyes"] = new face_emoji("601", "😁", 4);
    faces["grinning_squinting_face"] = new face_emoji("606", "😆", 5);
    faces["grinning_face_with_sweat"] = new face_emoji("605", "😅", 6);
    faces["rolling_on_the_floor_laughing"] = new face_emoji("923", "🤣", 7);
    faces["face_with_tears_of_joy"] = new face_emoji("602", "😂", 8);
    faces["slightly_smiling_face"] = new face_emoji("642", "🙂", 9);
}

let decompressNames = () => {
    let fullNames = [];
    let shortcut = ""

    for(let i = 0; i < names.length; i++) {
        let current = names[i]
        if(names[i].charAt(0) === ">") {
            current.replaceAll(">", shortcut)
        } else {
            shortcut = names[i]
        }
        fullNames[i]=current;
        fullNames[i].replace("_", " ")
    }

    names = fullNames;
}

let load = () => {
    loadNames()
    loadFaces()
    decompressNames();
}

let getEmojiByUnicode = (uc) => {
    let found = []

    for(let i = 0; i < emojis.length; i++) {
        if(faces[emojis[i]].u == uc) {
            found.push(faces[names[i]])
        }
    }

    return found;
}

let getEmojiByNum = (n) => {
    let found = []

    for(let i = 0; i < emojis.length; i++) {
        if(faces[emojis[i]].num == n) {
            found.push(faces[emojis[i]])
        }
    }

    return found;
}

let getEmojiByName = (n) => {
    return faces[n]
}