
// What if I ask you that the input string should start with 100xdevs

const crypto = require('crypto');

function call(str){
    let i = 0;
    while(true){
        let hash = crypto.createHash('sha256').update(str+i).digest('hex');
        if(hash.startsWith("00000")){
            console.log("The hash of "+str+i+" is "+hash)
            break;
        }
        i++;
    }
}

call("100xdevs")