const str = (str) => {
    const chain = str.split(""); 
    const [fletter,...rest] = chain; 
const completeNAme = [ fletter.toUpperCase(),...rest].join("")
return completeNAme
}

module.exports = str