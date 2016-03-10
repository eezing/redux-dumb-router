
import { expect } from 'chai'

import * as actionTypes from '../src/action-types'
import routerReducer from '../src/reducer'

describe('Reducers', function() {

    context('CHANGE', function() {
        it('should have expected object structure', function() {

            // setup
            const state = { pathname: '/contact' }
            const action = { type: actionTypes.CHANGE, pathname: '/home' }
            const subject = routerReducer

            // action -> result
            const result = subject(state, action)
            expect(result).to.be.eql({ pathname: action.pathname, location: {} })
        })
    })

    context('GOTO', function() {
        it('should have expected object structure', function() {

            // setup
            const state = { pathname: '/contact' }
            const action = { type: actionTypes.GOTO, pathname: '/home' }
            const subject = routerReducer

            // action -> result
            const result = subject(state, action)
            expect(result).to.be.eql({ pathname: state.pathname, next: action.pathname })
        })
    })

    context('REPLACE', function() {
        it('should have expected object structure', function() {

            // setup
            const state = { pathname: '/contact' }
            const action = { type: actionTypes.REPLACE, pathname: '/home' }
            const subject = routerReducer

            // action -> result
            const result = subject(state, action)
            expect(result).to.be.eql({ pathname: state.pathname, next: action.pathname })
        })
    })
})
