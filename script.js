// complete the given function

function palindrome(str){
	let strb = str.toLowerCase()
    let reverse = strb.split("").reverse().join("")
	if(reverse === strb)return true;
	return false;
		

	}
	// console.log(str)
	
}
module.exports = palindrome
