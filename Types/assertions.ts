
let text;
text = 'abc';

let endsWithC = (<string>text).endsWith('c');
let alternativeWay = (text as string).endsWith('c'); //does not change the variable type at runtime