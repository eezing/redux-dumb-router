
import {expect} from 'chai'
import jsdom from 'mocha-jsdom'
import { applyMiddleware, createStore } from 'redux'
import {createMemoryHistory} from 'history'

import createRouterMiddleware from '../src/create-middleware'
import router from '../src/reducer'
import * as actionCreators from '../src/action-creators'
import * as actionTypes from '../src/action-types'

const createTestMiddleware = (fn) => {
    return store => next => action => {
        fn(store, next, action)
    }
}

describe('Middleware', function() {

    jsdom()

    context('Dispatch "CHANGE" action with final store result', function() {
        it('Store should have expected structure', function() {

            // setup
            var pathname = '/silly-path'
            var history = createMemoryHistory()
            var subject = createRouterMiddleware(history)
            var store = createStore(router, applyMiddleware(subject))

            // action
            store.dispatch(actionCreators.change(pathname))

            // result
            var result = store.getState()
            var expected = { pathname: pathname, location: {} }
            expect(result).to.be.eql(expected)
        })
    })

    context('Dispatch "START" action with final store result', function() {
        it('Store should have expected structure', function() {

            // setup
            var history = createMemoryHistory()
            var subject = createRouterMiddleware(history)
            var store = createStore(router, applyMiddleware(subject))

            // action
            store.dispatch(actionCreators.start())

            // result
            var result = store.getState()
            expect(result).to.have.all.keys(['pathname', 'location'])
            expect(result.pathname).to.be.equal('/')
            expect(result.location).to.be.an('object')
        })
    })

    context('Dispatch "GOTO" action and interrupt change action', function() {
        it('Store should have expected structure', function() {

            // setup
            var pathname = '/about'
            var interrupt = createTestMiddleware((store, next, action) => {
                if (action.type == actionTypes.CHANGE && action.pathname == pathname) return
                next(action)
            })
            var history = createMemoryHistory()
            var subject = createRouterMiddleware(history)
            var store = createStore(router, applyMiddleware(interrupt, subject))
            store.dispatch(actionCreators.start())

            // action
            store.dispatch(actionCreators.goto(pathname))

            // result
            var result = store.getState()
            expect(result).to.have.all.keys(['pathname', 'location', 'next'])
            expect(result.pathname).to.equal('/')
            expect(result.next).to.equal(pathname)
            expect(result.location).to.be.an('object')
        })
    })

    context('Dispatch "GOTO" action with final store result', function() {
        it('Store should have expected structure', function() {

            // setup
            var history = createMemoryHistory()
            var subject = createRouterMiddleware(history)
            var store = createStore(router, applyMiddleware(subject))
            var pathname = '/about'
            store.dispatch(actionCreators.start())

            // action
            store.dispatch(actionCreators.goto(pathname))

            // result
            var result = store.getState()
            expect(result).to.have.all.keys(['pathname', 'location'])
            expect(result.pathname).to.equal(pathname)
            expect(result).to.not.have.property('next')
            expect(result.location).to.be.an('object')
        })
    })

    context('Dispatch "REPLACE" action and interrupt change action', function() {
        it('Store should have expected structure', function() {

            // setup
            var pathname = '/my-replacement-path'
            var history = createMemoryHistory()
            var interrupt = createTestMiddleware((store, next, action) => {
                if (action.type == actionTypes.CHANGE && action.pathname == pathname) return
                next(action)
            })
            var subject = createRouterMiddleware(history)
            var store = createStore(router, applyMiddleware(interrupt, subject))
            store.dispatch(actionCreators.start())

            // action
            store.dispatch(actionCreators.replace(pathname))

            // result
            var result = store.getState()
            expect(result).to.have.all.keys(['pathname', 'next', 'location'])
            expect(result.pathname).to.equal('/')
            expect(result.location).to.be.an('object')
            expect(result.next).to.equal(pathname)
        })
    })

    context('Dispatch "REPLACE" action with final store result', function() {
        it('Store should have expected structure', function() {

            // setup
            var pathname = '/my-replacement-path'
            var history = createMemoryHistory()
            var interrupt = createTestMiddleware((store, next, action) => {
                next(action)
            })
            var subject = createRouterMiddleware(history)
            var store = createStore(router, applyMiddleware(interrupt, subject))
            store.dispatch(actionCreators.start())

            // action
            store.dispatch(actionCreators.replace(pathname))

            // result
            var result = store.getState()
            expect(result).to.have.all.keys(['pathname', 'location'])
            expect(result.pathname).to.equal(pathname)
            expect(result).to.not.have.property('next')
            expect(result.location).to.be.an('object')
        })
    })
})
