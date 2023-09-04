const gens = require('./handlers/ids')
const ncp = require('copy-paste')
var inType = process.argv[2]
var lot = process.argv[3]
var input1 = inType.toLowerCase();


if (lot > 100){
    console.log(`You idiot, thats too many!!!`)
    process.exit()
}

if (input1 == "uuid"){
    input1 = "uid"
} else if (input1 == "uuids"){
    input1 = "uids"
    //console.log("Changed")
} 

switch (input1) {
    case 'handle' :
        printMe(gens.genHandle());
        //console.log("Generating a single Handle.")
        break;
    case 'uid' :
        printMe(gens.genID());
        //console.log("Generating a single UUID.")
        break;
    case 'handles' :
        printMe(gens.genMulHandles(lot))
        //console.log("Generating "+ lot +" Handles.")
        break;
    case 'uids' :
        printMe(gens.genMulID(lot))
        //console.log("Generating "+ lot +" UUIDs.")
        break;
        default:
            console.log(`Unknown Argument provided. Try again`);
}

//console.log(input1)
//console.log(input1)
function printMe(enter){
    ncp.copy(enter, function (){
        if (lot == "1"){
        console.log(`Copied your new ${input1.replace("s","")} to the clipboard.`)
       
        } else {
        console.log(`Copied ${lot} new ${input1} to the clipboard`)
        
        }
        process.stdout.write('\u0007');

    })
}