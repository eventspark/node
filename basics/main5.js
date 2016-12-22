var buf = new Buffer(10);

var buf2 = new Buffer([10, 20, 30, 40, 50]);

var buf3 = new Buffer("Simply Easy Learning", "utf-8");

console.log(buf3);

buff = new Buffer(256);
len = buff.write("Simply Easy Learning");

console.log("Octets written: " + len);

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

var buff2 = new Buffer('Simply Easy Learning');
var json = buff2.toJSON(buff2);

console.log(json);