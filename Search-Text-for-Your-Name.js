var text = "AeAndrew";

var myName = "Andrew";
var hits = [];

// Look for "E" in the text
for (var i = 0; i < text.length; i++) {
    if (text[i] === "A") {
        // If we find it, add characters up to
        // the length of my name to the array
        for (var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
