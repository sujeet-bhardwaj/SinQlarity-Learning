const fs=require('fs')
fs.writeFileSync('file3.txt','hello node')

const data = fs.readFileSync('file3.txt', 'utf8');
console.log(data)

fs.appendFileSync('file3.txt',"hello sujeet")


