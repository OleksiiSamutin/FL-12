function getMin(){
    let min = arguments[0] || null;

    for (let i =1; arguments.length;i++){
        if(min > arguments[i]){
            min = arguments[i]
        }
    }
    return min;
}

getMin(-14,3,2,3,5,6,-3,4,-10)