// complete the given function

function palindrome(str){
const len = str.length;
	for (let i=0; i<len/2; i++){
		if(str[i] != str[i-1]){
			return false;
			break
		}else{
			return true;
		}
	}
	// console.log(str)
	
}
module.exports = palindrome
