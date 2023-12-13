function printStringByCharInDiv(string, elementid) {
    let index = 0;
    let element = document.getElementById(elementid);
    let wordStorage = "";
    let wordmode = false;

    setInterval(() => {
        if (index == string.length) {
            clearInterval();
        } else {

            if (wordmode == true) {
                wordStorage += string.charAt(index);
                if (string.charAt(index) == '>') {
                    element.innerHTML += wordStorage;
                    wordmode = false;
                }

            } else {
                if (string.charAt(index) == "\\") {
                    index++;
                    element.innerHTML += string.charAt(index);
                } else if (string.charAt(index) == '<') {
                    wordStorage += string.charAt(index);
                    wordmode = true;
                } else { 
                    element.innerHTML += string.charAt(index);
                }
            }
        }
        index++;
    }, 50);

}

// async function myver(string, elementid, index) {
//     if (index == string.length) {
//         return;
//     } else {
//         let element = document.getElementById(elementid);
//         element.innerHTML += string.charAt(index);
//         await new Promise(r =>setTimeout(r, 50));
//     }
//     await myver(string, elementid, index+1);
// }
// function printStringByWord(myString, div) {
//     var words = myString.split(" ");
//     var index = 0;
//     let myDiv = document.getElementById(div);
//     var intervalId = setInterval(function() {
//         myDiv.innerHTML += words[index] + " ";
//         index++;
//         if(index == words.length) {
//             clearInterval(intervalId);
//         }
//     }, 200);
// }

printStringByCharInDiv("\\> Init <br> Welcome! My Name is Sean!", "landing-init");



