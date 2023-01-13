// complete the given function

function palindrome(str){
const len = str.length;
	if(str.length == 1){
		return true;
	}
	for (let i=0; i<len/2; i++){
		if(str[i] != str[len -1 -i]){
			return false;
		
		}else{
			return true;
		}
	}
	// console.log(str)
	
}
module.exports = palindrome
