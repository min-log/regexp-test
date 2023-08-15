console.log("main.js");
const str = `
010-1234-1234 
aaathe@naver.com 
The quick brown fox jumps over the lazy dog
aaabbcccddddaaathedd
`;

// const regexp =  new RegExp('the','gi');
// // g - 플래그
// // i - 대 소문자 구분 없음
// //console.log(str.match(regexp));

// const regexp1 = /the/gi;

// console.log(str.match(regexp1));

// const regexp = /fox/gi
// console.log(str.replace(regexp,'AAA'));
// console.log(str);


// const regexp = /d$/gm
// console.log(str.match(regexp));

// const regexp = /^a/gm
// console.log(str.match(regexp));


console.log(
	str.match(/.{1,}(?=@)/g)
)

console.log(
	str.match(/(?<=@).{1,}/g)
)