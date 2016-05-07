
import { expect } from 'chai'
import jsdom from 'mocha-jsdom'
import { applyMiddleware, createStore } from 'redux'
import { createMemoryHistory } from 'history'

import createRouterMiddleware from '../src/create-middleware'
import * as actionCreators from '../src/action-creators'
import router from '../src/reducer'

describe('Middleware', function() {

	var history = null
	var store = null
	var routerMiddleware = null

	beforeEach(function() {
		jsdom()
		history = createMemoryHistory()
		routerMiddleware = createRouterMiddleware(history)
		store = createStore(router, applyMiddleware(routerMiddleware))
	})

	context('dispatch START', function() {

		it('should have redux store state have "location.action" equal to "POP"', function() {

			// action
			store.dispatch(actionCreators.start())

			// result
			var expected = 'POP'
			var subject = store.getState().location.action
			expect(subject).to.be.equal(expected)
		})

		it('should have redux store state have "location.pathname" exist', function() {

			// action
			store.dispatch(actionCreators.start())

			// result
			var subject = store.getState().location.pathname
			expect(subject).to.exist
		})
	})

	context('dispatch GOTO', function() {

		it('should have redux store state have "location.action" equal to "PUSH"', function() {

			// setup
			store.dispatch(actionCreators.start())

			// action
			store.dispatch(actionCreators.goto('/home'))

			// result
			var expected = 'PUSH'
			var subject = store.getState().location.action
			expect(subject).to.be.equal(expected)
		})

		it('should have redux store state have "location.pathname" equal to given pathane', function() {

			// setup
			store.dispatch(actionCreators.start())

			// action
			var target = '/blog'
			store.dispatch(actionCreators.goto(target))

			// result
			var expected = target
			var subject = store.getState().location.pathname
			expect(subject).to.be.equal(expected)
		})
	})

	context('dispatch REPLACE', function() {

		it('should have redux store state have "location.action" equal to "REPLACE"', function() {

			// setup
			store.dispatch(actionCreators.start())
			store.dispatch(actionCreators.goto('/home'))

			// action
			store.dispatch(actionCreators.replace('/blog'))

			// result
			var expected = 'REPLACE'
			var subject = store.getState().location.action
			expect(subject).to.be.equal(expected)
		})

		it('should have redux store state have "location.pathname" equal to given pathane', function() {

			// setup
			store.dispatch(actionCreators.start())
			store.dispatch(actionCreators.goto('/first'))

			// action
			var target = '/second'
			store.dispatch(actionCreators.replace(target))

			// result
			var expected = target
			var subject = store.getState().location.pathname
			expect(subject).to.be.equal(expected)
		})
	})
})
