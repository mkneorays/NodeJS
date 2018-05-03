function  request(order) {
    console.log('requeat method  ' ,order);
     response(function(){
         console.log('requeat xx method  ' ,order);
     });
}//requrst

function  response(callback) {
   // console.log('response method  ' ,callback);
     setTimeout(callback, 5000);
}//requrst
request(1);
request(2);