function spinWords(string) {
   const arrayString = string.split(' ');
   let result  = '';
   arrayString.map((str,i) => {
      if(str.length >= 5) {
          arrayString[i] = str.split('').reverse().join('');
      }else {
          arrayString[i] = str;
      }
      result = arrayString.join(' ');
   });
return result;
}
const a = spinWords('string fak rtyuiii anton');

    console.log(a);


function isIsogram(str){
    const arr = str.toLowerCase().split('');
    if(arr.includes(arr[0], 1)) {
        return false;
    } else {
        return true;
    }
}
const b = isIsogram('abacdf');
console.log(b);

function isIsogram(str){
    return str
        .toLowerCase()
        .split('')
        .includes(str[0], 1)
}

const b = isIsogram('abacdf');
console.log(b);

console.log(Math.sqrt(155));


const user = {
    firstName: 'Test',
    lastName: 'Testovich',
    contactInfo: {
        phones: ['05025632541', '050456632541', '050256321234'],
        emails: ['test2@gmail.com', 'test3@gmail.com', 'test4@gmail.com'],
    },
};

const {contactInfo: {phones[1], emails[2]}} = user;