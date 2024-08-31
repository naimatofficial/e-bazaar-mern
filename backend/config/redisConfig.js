import Redis from 'redis'
import config from './index.js'

const redisClient = Redis.createClient({
    url: config.redisUrl,
})
// password: process.env.REDIS_PASSWORD,

redisClient.on('error', (err) => console.log('Redis Client Error', err))

await redisClient.connect()

console.log('Redis cache database connected..')

export default redisClient
