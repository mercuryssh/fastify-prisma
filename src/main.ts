import Fastify from 'fastify'

const server = Fastify({ logger: true })

server.get('/', (request, reply) => {
  reply.send({ greeter: 'The Show Must Go On' })
})

const runServer = async (): Promise<void> => {
  try {
    await server.listen(4444)
  } catch (err) {
    server.log.error(err)
    process.exit()
  }
}
runServer()
