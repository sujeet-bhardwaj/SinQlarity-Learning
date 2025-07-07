const redis = require('redis');

const redisurl='redis://127.0.0.1:6379';


const client = redis.createClient(redisurl);

client.connect();

client.set("username", "sujeet");
client.get("username").then(console.log);  // Output: sujeet
