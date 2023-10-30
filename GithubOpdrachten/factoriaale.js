let n = 5;  
  
function factoriaal(n) {  
    let ans = 1;  
      
    if(n === 0) 
        return 1; 
    for (let i = 2; i <= n; i++)  
        ans = ans * i;  
    return ans;  
} 
  
console.log(factoriaal(n));