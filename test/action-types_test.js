
import { expect } from 'chai'

import * as actionTypes from '../src/action-types'

const typesList = ['START', 'GOTO', 'CHANGE']

describe('Action types are defined correctly', function() {

    typesList.forEach(function(typeName) {

        describe(typeName, function() {

            it('should be a non-empty string', function() {
                expect(actionTypes[typeName]).to.be.a('string')
                expect(actionTypes[typeName]).to.not.equal('')
            })

            it('should be unique among siblings', function() {
                typesList.forEach(function(item) {
                    if (item === typeName) return
                    expect(actionTypes[item]).to.not.equal(typeName)
                })
            })
        })
    })
})
