const hapi = require('hapi')
const mongoose = require('mongoose')
const Painting = require('./models/painting')

const init = async() => {
  mongoose.connect('mongodb://admin:password1@ds251240.mlab.com:51240/mongoose_test')

  mongoose.connection.once('open', () => {
    console.log('connected to db')
  })

  const server = hapi.server({
    port: 4000,
    host: 'localhost'
  })

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: function(req, res) {
        return '<h1> test </h1>'
      }
    },
    {
      method: 'GET',
      path: '/api/v1/paintings',
      handler: (req, res) => Painting.find()
    },
    {
      method: 'POST',
      path: '/api/v1/paintings',
      handler: (req, res) => {
        const { name, url, techniques } = req.payload
        const painting = new Painting({
          name,
          url,
          techniques
        })
        return painting.save()
      }
    }
  ])

  await server.start()

  console.log(`server running at ${server.info.uri}`);
}

init()
