// complete the given function

function palindrome(str){
	let strb = str.toLowercase()
const len = strb.length;
	
	for (let i=0; i<len/2; i++){
		if(strb[i] !== strb[len -i-1]){
			return false;
		
		}else{
			return true;
		}
	}
	// console.log(str)
	
}
module.exports = palindrome
