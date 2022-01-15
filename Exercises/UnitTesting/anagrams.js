function isAnagram(string1, string2){
    let string1Letters=string1.split('');
    let string2Letters=string2.split('');

    return string1Letters.every(letter =>
        string2Letters.includes(letter)) 
        && string2Letters.every(letter =>
            string1Letters.includes(letter)) 
}

module.exports= isAnagram;