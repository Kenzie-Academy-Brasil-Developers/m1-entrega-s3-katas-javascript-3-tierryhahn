const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults (num) {
    return num
}

function kata1() {
    let result = []
        for (let i = 1; i < 26; i++){
            result.push(i)
        }
        return showResults(result)
}

function kata2() {
    let result = []
        for (let i = 25; i > 0; i--){
            result.push(i)
        }
        return showResults(result)
}

function kata3() {
    let result = []
        for (let i = -1; i > -26; i--){
            result.push(i)
        }
        return showResults(result)
}

function kata4() {
    let result = []
        for (let i = -25; i < 0; i++){
            result.push(i)
        }
        return showResults(result)
}

function kata5() {
    let result = []
        for (let i = 25; i > -26; i--){
            if ( i % 2 != 0){
                result.push(i)
            }
        }
        return showResults(result)
}

function kata6() {
    let result = []
        for (let i = 3; i < 100; i++){
            if ( i % 3 === 0){
                result.push(i)
            }
        }
        return showResults(result)
}

function kata7() {
    let result = []
        for (let i = 7; i < 100; i++){
            if ( i % 7 === 0){
                result.push(i)
            }
        }
        return showResults(result)
}

function kata8() {
    let result = []
        for (let i = 100; i > 2; i--){
            if ( i % 3 === 0 || i % 7 === 0){
                result.push(i)
            }
        }
        return showResults(result)
}

function kata9() {
    let result = []
        for (let i = 5; i < 101; i++){
            if ( i % 2 != 0 && i % 5 === 0){
                result.push(i)
            }
        }
        return showResults(result)
}

function kata10() {
    let result = []
        for (let i = 0; i < sampleArray.length; i++){
            result.push(sampleArray[i])
        }
        return showResults(result)
}

function kata11() {
    let result = []
        for (let i = 0; i < sampleArray.length; i++){
            if ( sampleArray[i] % 2 === 0){
                result.push(sampleArray[i])
            }
        }
        return showResults(result)
}

function kata12() {
    let result = []
        for (let i = 0; i < sampleArray.length; i++){
            if ( sampleArray[i] % 2 != 0){
                result.push(sampleArray[i])
            }
        }
        return showResults(result)
}

function kata13() {
    let result = []
        for (let i = 0; i < sampleArray.length; i++){
            if ( sampleArray[i] % 8 === 0){
                result.push(sampleArray[i])
            }
        }
        return showResults(result)
}

function kata14() {
    let result = []
        for (let i = 0; i < sampleArray.length; i++){
            result.push(sampleArray[i]*sampleArray[i])
        }
        return showResults(result)
}

function kata15() {
    let soma = 0
        for (let i = 0; i < 21; i++){
            soma += i
        }
        return showResults(soma)
}

function kata16() {
    let soma = 0
        for (let i = 0; i < sampleArray.length; i++){
            soma += sampleArray[i]
        }
        return showResults(soma)
}

function kata17() {
    let menor = sampleArray[0]
        for (let i = 0; i < sampleArray.length; i++){
            if (sampleArray[i] < menor){
                menor = sampleArray[i]
            }
        }
        return showResults(menor)
}

function kata18() {
    let maior = sampleArray[0]
        for (let i = 0; i < sampleArray.length; i++){
            if (sampleArray[i] > maior){
                maior = sampleArray[i]
            }
        }
        return showResults(maior)
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
