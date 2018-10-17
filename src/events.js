const events = {
	'url.verification': (event, res) => {
		res.set('Content-Type', 'application/json')
		res.send({challenge: event.challenge})
	},
	'board.comment.create': (event, res) => {
		console.log('App got board.comment.create event')
		res.status(200).send()
	}
}

module.exports.processEvent = function(event, res) {
	console.log('Process event:\n', event)
	const eventProcessor = events[event.type]
	if (eventProcessor) {
		eventProcessor(event, res)
	} else {
		res.status(200).send()
	}
}
