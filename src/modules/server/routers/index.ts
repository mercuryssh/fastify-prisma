import { FastifyPluginAsync } from 'fastify'

interface RouterOptions {
  greeter: string
}

const router: FastifyPluginAsync<RouterOptions> = async (instance, options): Promise<void> => {
  instance.get('/hello', async () => {
    return { greeter: options.greeter }
  })
}

export default router
