let Draft = oboRequire('models/draft')
let logger = oboRequire('logger')

let setCurrentDraft = (req, draft) => {
	if (!(draft instanceof Draft)) throw new Error('Invalid Draft for Current draft')
	req.currentDraft = draft
}

let resetCurrentDraft = req => {
	req.currentDraft = null
}

// returns a Promise!!!
let getCurrentDraft = (req) => {
	if (!req.currentDraft){
		// Set and retrieve the draft from params
		if(req.params && req.params.draftId){
			return Draft.fetchById(req.params.draftId)
			.then(draft => {
				setCurrentDraft(req, draft)
				return req.currentDraft
			})

		}

		// Set and retrive the draft from body
		if(req.body && req.body.draftId){
			return Draft.fetchById(req.body.draftId)
			.then(draft => {
				setCurrentDraft(req, draft)
				return req.currentDraft
			})

		}

		logger.warn(
			'No Session or Current Draft?',
			req.currentDraft
		)
		return Promise.reject(new Error('Draft Required'))
	}

	return Promise.resolve(req.currentDraft)
}

let requireCurrentDraft = req => {
	// returns a promise
	return req
		.getCurrentDraft()
		.then(draft => {
			return draft
		})
		.catch(err => {
			logger.warn('requireCurrentDraft', err)
			throw new Error('Draft Required')
		})
}

module.exports = (req, res, next) => {
	req.setCurrentDraft = setCurrentDraft.bind(this, req)
	req.getCurrentDraft = getCurrentDraft.bind(this, req)
	req.requireCurrentDraft = requireCurrentDraft.bind(this, req)
	req.resetCurrentDraft = resetCurrentDraft.bind(this, req)
	next()
}
