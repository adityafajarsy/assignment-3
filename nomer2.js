// ADITYA FAJAR SATYA YUDHA

function threeStepsAB(text) {
    if(text.length < 3) {
        return false;
    }
    
    for (let i = 0; i < text.length - 2; i++) {
        if ((text[i] === 'a' && text[i + 2] === 'b') || 
            (text[i] === 'b' && text[i + 2] === 'a')) {
            return true;
        }
    }
    
    return false 
}
    
    console.log(threeStepsAB('lane borrowed')); 
    console.log(threeStepsAB('i am sick')); 
    console.log(threeStepsAB('you are boring')); 
    console.log(threeStepsAB('barbarian')); 
    console.log(threeStepsAB('bacon and meat')); 