
import { expect } from 'chai'

import * as actionTypes from '../src/action-types'
import * as actionCreators from '../src/action-creators'

describe('Action Creators', function() {

    describe('change', function() {

        it('should return an action object with correct type, given pathname, and empty location property', function() {

            const pathname = '/contact'
            const result = actionCreators.change(pathname)

            expect(result.type).to.equal(actionTypes.CHANGE)
            expect(result.pathname).to.eql(pathname)
            expect(result).to.have.property('location')
        })
    })    

    describe('start', function() {

        it('should return an action object with correct type', function() {

            const expectedAction = {
                type: actionTypes.START
            }

            expect(actionCreators.start()).to.eql(expectedAction)
        })
    })

    describe('goto', function() {

        it('should return an action object with correct type and given pathname', function() {

            const pathname = '/about'

            const expectedAction = {
                type: actionTypes.GOTO,
                pathname: pathname
            }

            expect(actionCreators.goto(pathname)).to.eql(expectedAction)
        })
    })

    describe('replace', function() {

        it('should return an action object with correct type and given pathname', function() {

            const pathname = '/blog'

            const expectedAction = {
                type: actionTypes.REPLACE,
                pathname: pathname
            }

            expect(actionCreators.replace(pathname)).to.eql(expectedAction)
        })
    })
})
