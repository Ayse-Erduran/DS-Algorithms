/**
 * 
 * Explanation: 
 * https://www.youtube.com/watch?v=GTJr8OvyEVQ&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&ab_channel=TusharRoy-CodingMadeSimple
 * 
 */


const createPrefixTable = (pattern) => {
    let table = [0]
    let prefix_idx = 0
    let suffix_idx = 1
    while(suffix_idx < pattern.length){
        if(pattern[prefix_idx] === pattern[suffix_idx]){
            table[suffix_idx] = ++prefix_idx
            suffix_idx++
        } else {
            if(prefix_idx === 0){
                table[suffix_idx] = 0
                suffix_idx++
            } else {
                prefix_idx = table[prefix_idx - 1]
            }
        }
    }
    return table
}






const KMPSearch = (text, pattern) => {
    const table = createPrefixTable(pattern)
    let text_idx = 0
    let pattern_idx = 0
    while(pattern_idx < pattern.length){
        if(pattern[pattern_idx] === text[text_idx]){
            if(pattern_idx === pattern.length - 1){
                return text_idx - pattern.length + 1
            } else {
                text_idx++
                pattern_idx++
            }
        } else {
            if(pattern_idx === 0){
                text_idx++
            } else {
                pattern_idx = table[pattern_idx - 1]
            }
        }
    }
    return -1
}

const result = KMPSearch("abcasdabcsdejk", "asdabcs")
console.log(result)
