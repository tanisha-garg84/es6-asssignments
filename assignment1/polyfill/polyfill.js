
let arr = [1,2,3,4,5];
//-------------------------map polyfill-------------------------------

function mapPoly(arr,cb){
    let newArr = [];
    for ( let i=0;i<arr.length;i++){
        newArr.push(cb(arr[i]));
    }
    return newArr
}
function square(x){
    return x*x;
}
console.log(mapPoly(arr,square));

//-------------------------------------filterpoly-----------------

function reducePoly (arr, operation){
    let newArr = [];
    for (let i=0;i<arr.length;i++){
        if(opt(arr[i])){
             newArr.push(operation(arr[i]))
        }
        return newArr
    }
    function add(val){
        if(val%2==0){
            return val;
        }
    }
    filter (arr,odd)
}

//----------------------reducepoly-----------------------------------


function reducePoly(arr,cb,initial=arr[0]){
let acc=initial;
for (let i=1 ; i<  arr.length ; i++){
acc=cb(arr[i],acc)
}
return acc
}
function sum(x,acc){
    return (x+acc)
}
