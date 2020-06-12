const express 	= require( 'express' )
const appRouter = express.Router()

appRouter.get( '/*', function( req, res ) {
  res.send( '<h1>Hello, DockerCon2!</h1>' )
})

module.exports = appRouter
