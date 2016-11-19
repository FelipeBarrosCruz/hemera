'use strict'


function myPlugin(options) {

  var hemera = this

  hemera.add({
    topic: 'math',
    cmd: 'add'
  }, (resp, cb) => {

    cb(null, resp.a + resp.b)
  })

  return {
    name: 'myPlugin'
  }

}



'use strict'

const Hemera = require('./../')
const nats = require('nats').connect()

const hemera = new Hemera(nats, { logLevel: 'info' })

hemera.ready(() => {

  hemera.use(myPlugin)

})