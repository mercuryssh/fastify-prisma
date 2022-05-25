import ServerFactory from './modules/server/factory.js'

const app = ServerFactory.createServer(process.env.NODE_ENV ?? 'development')
app.run().catch(null)
