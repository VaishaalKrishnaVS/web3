
// What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10

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

str = 'harkirat => Raman | Rs 100 Ram => Ankit | Rs 10'

call(str)