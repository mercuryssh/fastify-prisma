import Factory from './modules/server/factory.js'

const app = Factory.createServer(process.env.NODE_ENV ?? 'development')
app.run().catch(null)
