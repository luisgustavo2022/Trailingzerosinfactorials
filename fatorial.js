// Function to calculate the highest power of a given base in a given number
function highest_power_of_base(num, base) {
    let power = 0;
    while (num % base === 0) {
        power += 1;
        num = num / base;
    }
    return power;
}

// Function to calculate the factorial of a given number and determine the number of trailing zeros in the factorial when expressed in a given base
function fatorial(num, base) {
    if (num > 0) {
        let a = 1;
        for (let i = 1; i <= num; i++) {
            a = a * i;
        };

        // Calculate the number of trailing zeros in the factorial
        const zerosFinais = highest_power_of_base(a, base);

        console.log("Fatorial:", a);
        console.log("Zeros finais na base", base, ":", zerosFinais);
    } else {
        console.log("Tem que ser maior que 0");
    }
};

console.log("funcionando");

// Test the fatorial function with inputs (15, 10)
fatorial(7, 2);
