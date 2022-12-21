miniMaxSum([6, 3, 10, 27, 1]);
miniMaxSum([5, 19, 11, 14, 15]);
miniMaxSum([7, 1, 2, 22, 15]);
miniMaxSum([4, 15, 5, 14, 42]);
miniMaxSum([4, 15, 5, 14, 42]);

miniMaxSum([30, 19, 18, 57, 21]);
miniMaxSum([26, 31, 10, 16, 37]);
miniMaxSum([16, 11, 39, 16, 68]);
miniMaxSum([10, 30, 32, 34, 62]);
miniMaxSum([13, 29, 46, 11, 69]);

miniMaxSum([94, 176, 223, 361, 117]);
miniMaxSum([31, 107, 90, 346, 184]);
miniMaxSum([18, 178, 291, 5, 350]);
miniMaxSum([41, 105, 177, 200, 384]);
miniMaxSum([93, 104, 92, 114, 411]);

function miniMaxSum(arr) {
    let min = 0 
    let max= 0 
    let soted = arr.sort((a,b) => a - b) 
    let total = soted.reduce((a, c)=> a + c , 0) 
    max = total - arr[0] 
    min = total - arr[arr.length - 1 ] 

    console.log(min, max);

}
