// ADITYA FAJAR SATYA YUDHA

function threeStepsAB(text) {
    if(text.length < 4) {
        return false;
    }
    
    for (let i = 0; i < text.length - 3; i++) {
        if ((text[i] === 'a' && text[i + 3] === 'b') || 
            (text[i] === 'b' && text[i + 3] === 'a')) {
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