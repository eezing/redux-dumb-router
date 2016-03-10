
import { expect } from 'chai'
import * as actionTypes from '../src/action-types'

describe('Action Types', function() {

    var subject = actionTypes

    var shouldHaveTypes = ['CHANGE', 'START', 'GOTO', 'REPLACE']

    shouldHaveTypes.forEach(function(typeName) {

        context(typeName, function() {

            it('should be a non-empty string', function() {
                expect(subject[typeName]).to.be.a('string')
                expect(subject[typeName]).to.not.equal('')
            })

            it('should be unique among siblings', function() {
                shouldHaveTypes.forEach(function(item) {
                    if (item === typeName) return
                    expect(subject[item]).to.not.equal(typeName)
                })
            })
        })
    })
})
