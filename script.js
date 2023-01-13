// complete the given function

function palindrome(str){
	let strb = str.toLowerCase()
const len = strb.length-1;
	  // let j = str.length -1;
      for( let i = 0 ; i < len/2 ;i++)
      {
        let x = str[i] ;//forward character
        let y = str[len-i];//backward character
        if( x != y)
        {
          // return false if string not match
          return false;
        }
      }
      /// return true if string is palindrome
      return true;

	}
	// console.log(str)
	
}
module.exports = palindrome
