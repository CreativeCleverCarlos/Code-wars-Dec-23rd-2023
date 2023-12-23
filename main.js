/**
 Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.
**/

function generateRange(min, max, step){
    for (let i = min; i <= max; i+step){
        console.log(i)
    }
}

generateRange(1,10,1)