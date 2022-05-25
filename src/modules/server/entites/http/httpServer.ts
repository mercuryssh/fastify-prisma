import { fastify, FastifyInstance, FastifyServerOptions } from 'fastify'

export interface IHttpServer {
  run: () => Promise<void>
}

interface ServerOpts {
  instanceOpts: FastifyServerOptions
}

export class HttpServer implements IHttpServer {
  private readonly instatance: FastifyInstance

  constructor({ instanceOpts }: ServerOpts) {
    this.instatance = fastify(instanceOpts)
  }

  async run(): Promise<void> {
    await this.instatance.listen(4444)
  }
}

const ServerBuilder = {
  createServer(env: string) {
    if (env === 'production') {
      return new HttpServer({ instanceOpts: { logger: false } })
    }
    return new HttpServer({ instanceOpts: { logger: true } })
  }
}

export default ServerBuilder
