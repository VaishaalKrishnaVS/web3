
// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000
const crypto = require('crypto');

function cal() {
    let i =0;
    while(true){
        let hash = crypto.createHash('sha256').update(i.toString()).digest('hex');
        if(hash.startsWith("00000")){
            console.log("The hash of "+i.toString()+" is "+hash)
            break;
        }
        i++;
    }
}

cal()