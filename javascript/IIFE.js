// Immediately invoked function expressions

(function chai() {
    console.log(`DB Connected`);
    
})();


( (name) =>  {
    console.log(`DB connected two ${name}`);
    
})('hitesh')