function isPalindrome(s: string): boolean {
    if (!s) return true;
    
    let i =0, j = s.length-1;
    const alphanumeric = /^[a-z0-9]+$/i;
    while (i<j){
        if (!alphanumeric.test(s[i])){
            i += 1
            continue;
        }else if(!alphanumeric.test(s[j])){
            j -= 1;
            continue;
        }else if (s[i] == s[j]){
            i += 1;
            j -= 1;
            
        }else{
            return false;
        }
    }
    return true;
    

};