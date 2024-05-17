const luck = ['Perfect Luck - Felix Felicis', 'Good - The Odds Will Be In Your Favor', 'Average - Your Luck Is Unclear', 'Not Good - You Should Probably Avoid Water Or Large Animals', 'Terrible - Anything Bad That Can Happen Will Happen'];
const symbol = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const goldenNumbers = [Math.floor(Math.random() * 100),  Math.floor(Math.random() * 100),  Math.floor(Math.random() * 100),  Math.floor(Math.random() * 100),  Math.floor(Math.random() * 100)];

function getOutput(arr1, arr2, arr3){
    let ran1 = Math.floor(Math.random() * arr1.length);
    let ran2 = Math.floor(Math.random() * arr2.length);
    return `Your luck rating is: ${arr1[ran1]}
You are compatible with: ${arr2[ran2]}
Your goldenNumbers are: ${arr3}`;
}
console.log(getOutput(luck, symbol, goldenNumbers));