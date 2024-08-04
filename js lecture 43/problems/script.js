// // Function to generate Fibonacci numbers up to a given number n
// function fibonacci(n) {
//     let fibSequence = [0, 1]; 

//     for (let i = 2; i <= n; i++) {
//         fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2]; 
//     }

//     return fibSequence.slice(0, n + 1); 
// }


// const n = 10;
// const fibNumbers = fibonacci(n);

// console.log(`Fibonacci numbers up to ${n}: ${fibNumbers.join(', ')}`);


// function fibonacci(n){
//     let fib = [0,1];

//     for (let i = 2; i <= n; i++) {
//         fib[i] = fib[i-1] + fib[i-2];
//     }

//     return fib.slice(0,n+1);
// }

// const n=10;
// const fibNumbers = fibonacci(n);
// console.log(fibNumbers.join(',  '));



function fibonacci(n){
    let fib = [0,1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib.slice(0,n+1);
}
const n=10;
const fibNumbers = fibonacci(n);
console.log(fibNumbers.join(', '));
