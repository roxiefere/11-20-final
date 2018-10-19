// First Last 6
function firstLast6(arr){
    var end = arr.lastIndexOf(6);
    var start = arr.indexOf(6);
    if(start == 0 || end == arr.length - 1){
        return true;
    }else{
        return false;
    }
}

// Has 23
function has23(arr){
    if(arr.indexOf(2) != (-1) || arr.indexOf(3) != (-1)){
        return true;
    }else{
        return false;
    }
}

// Fix 23
function fix23(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 2 && arr[i + 1] == 3){
            arr[i + 1] = 0;
        }
    }
    return arr;
}

// Count YZ
function countYZ(str){
    var count = 0;
    for(var i=0; i < str.length; i++){
        if(str[i] == " " && (str[i-1] == "y" || str[i-1] == "z" || str[i-1] == "Y" || str[i-1] == "Z")){
            count++;
        }
    }
    if(str.endsWith("z") || str.endsWith("y") || str.endsWith("Z") || str.endsWith("Y")){
        count++;
    }
    return count;
}

//End Other
function endOther(a, b){
    var stra = a.toLowerCase();
    var strb = b.toLowerCase();
    if(strb.endsWith(stra) ||stra.endsWith(strb)){
        return true;
    }else {
        return false;
    }
}

//Star Out
function starOut(str){
    var answer = "";
    for(var i=0; i < str.length; i++){
        if(str[i] !== "*" && str[i+1] !== "*" && str[i-1] !== "*"){
            answer = answer + str[i];
        }
    }
    return answer;
}

//Get Sandwich
function getSandwich(str){
    var begin = str.indexOf("bread") + 5;
    var end = str.lastIndexOf("bread");
    var count = 0;
    for(var i=0; i < str.length; i++){
        if(str.substring(i, i+5) == "bread"){
            count++;
        }
    }
    if(count >= 2){
        return str.substring(begin, end);
    }else{
        return "";
    }
}

// Can Balance
function canBalance(arr){
    var sum1 = 0;
    var sum2 = 0;
    for(var i=0; i < arr.length; i++){
        sum1 += arr[i];
        for(var j=i+1; j < arr.length; j++){
            sum2 += arr[j];
        }
        if(sum1 == sum2){
            return true;
        }else{
            sum2 = 0;
        }


    }
    return false;
}

//Count Clumps
function countClumps(arr){
    var count = 0;
    for(var i=0; i < arr.length; i++){
        if(arr[i+1] == arr[i] && arr[i-1] !== arr[i]){
            count++;
        }
    }
    return count;
}

//Evenly Spaced
function evenlySpaced(a, b, c){
    if((b - a) == (c - b) || (c - a) == (b - c) || (a - b) == (c - a) || (c - b) == (a - c) || (a - c) == (b - a)){
        return true;
    }else{
        return false;
    }
}


//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += canBalance([1, 1, 1, 2, 1]);
     // document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}