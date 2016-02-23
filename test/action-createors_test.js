
import { expect } from 'chai'

import * as actionTypes from '../src/action-types'
import * as actionCreators from '../src/action-creators'

describe('Action creators are returning action objects', function() {

    describe('start', function() {

        it('should return an action object with correct type', function() {

            const expectedAction = {
                type: actionTypes.START
            }

            expect(actionCreators.start()).to.eql(expectedAction)
        })
    })

    describe('goto', function() {

        it('should return an action object with correct type and pathname', function() {

            const pathname = '/about'

            const expectedAction = {
                type: actionTypes.GOTO,
                pathname: pathname
            }

            expect(actionCreators.goto(pathname)).to.eql(expectedAction)
        })
    })

    describe('change', function() {

        it('should return an action object with correct type and pathname', function() {

            const pathname = '/contact'

            const expectedAction = {
                type: actionTypes.CHANGE,
                pathname: pathname
            }

            expect(actionCreators.change(pathname)).to.eql(expectedAction)
        })
    })
})
