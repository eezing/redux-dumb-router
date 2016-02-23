
import { expect } from 'chai'

import * as actionTypes from '../src/action-types'
import routerReducer from '../src/router-reducer'

describe('Reducers return new state when given an action', function() {

    describe('GOTO', function() {

        const state = { pathname: '/contact' }

        const action = {
            type: actionTypes.GOTO,
            pathname: '/home'
        }

        const newState = routerReducer(state, action)

        it('should have next property equal to pathname property of given action', function() {
            expect(newState).property('next', action.pathname)
        })

        it('should have pathname property equal to pathname property of given action', function() {
            expect(newState).property('pathname', state.pathname)
        })
    })

    describe('CHANGE', function() {

        const state = { pathname: '/contact', next: '/about' }

        const action = {
            type: actionTypes.CHANGE,
            pathname: '/about'
        }

        const newState = routerReducer(state, action)

        it('should not have next property', function() {
            expect(newState.next).to.not.exist
        })

        it('should have pathname property equal to pathname of given action', function() {
            expect(newState).property('pathname', action.pathname)
        })
    })
})
