console.log("use strict");
function name(){
    console.log("gadar");
}

function name2  (){
    console.log("dilwale");
}

//its means we want to call name method
//from another file
module.exports.a=name;
module.exports.b=name2;

//this is the some another way to define module
module.exports ={
    name: function (){
    console.log("gadar");
},

    name2: function   (){
    console.log("dilwale");
},

  favName:   "mithilesh"
}