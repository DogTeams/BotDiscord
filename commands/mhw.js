const Command = require('./command')
const { Client } = require('pg')

const client = new Client({
	user: 'pi',
	host: 'localhost',
	database: 'mhw',
	password: '100920',
})

module.exports = class MHW extends Command{

	static match(message){
		return message.content.startsWith('!mhw')
	}

	static action(message){
		let args = message.content.split(' ')

		client
		.connect()
		.then(() => console.log('connected'))
		.catch(err => console.error('connection error',err.stack))
		client
		.query('SELECT * FROM monster WHERE name = ?',['Grand Jagras'],function(err,result){
		if(err){
		return console.error('error',err.stack)
		}
		message.send(result.rows[0].name)
		client.end()})
	}
}
