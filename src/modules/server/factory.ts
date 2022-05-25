import { fastify, FastifyInstance, FastifyServerOptions } from 'fastify'
import router from './routers/index.js'

interface IServer {
  run: () => Promise<void>
}

class ServerProduct implements IServer {
  private readonly _httpServer: FastifyInstance

  constructor(config: FastifyServerOptions) {
    this._httpServer = fastify(config)
    void this._httpServer.register(router, { greeter: 'The Show Must Go On' })
  }

  async run(): Promise<void> {
    try {
      await this._httpServer.listen(4444)
    } catch (err) {
      this._httpServer.log.error(4444)
      process.exit()
    }
  }
}

const ServerFactory = {
  createServer(env: string): IServer {
    if (env === 'production') {
      return new ServerProduct({ logger: false })
    }

    return new ServerProduct({ logger: true })
  }
}
export default ServerFactory
