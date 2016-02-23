
import {expect} from 'chai'

import createMiddleware from '../src/create-middleware'
import {createMemoryHistory} from 'history'
import * as actionCreators from '../src/action-creators'

const createFakeStore = fakeData => ({
    getState() {
        return fakeData
    }
})

const dispatchWithStoreOf = (storeData, action) => {

    const history = createMemoryHistory()
    const middleware = createMiddleware(history)

    let dispatched = null
    const dispatch = middleware(createFakeStore(storeData))(actionAttempt => dispatched = actionAttempt)

    dispatch(action)
    return dispatched
}

describe('Middleware', function() {

    context('Create Middleware with history', function() {
        it('Should return a function', function() {
            const history = createMemoryHistory()
            expect(createMiddleware(history)).to.be.a('function')
        })
    })

    context('Run middleware with "test" action type', function() {
        it('Should dispatch action', function() {
            const action = { type: 'text' }
            expect(dispatchWithStoreOf({}, action)).to.be.equal(action)
        })
    })
})
