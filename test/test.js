import findDuplicates from '../index.js'
import * as assert from 'assert';

// Requiring module 

// We can group similar tests inside a describe block 
describe("Find duplicate rules", () => {
    let failedRules = []
    let executedRules = []

    // We can add nested blocks for different tests 
    describe("More failedRules", () => {
        beforeEach(() => {
            failedRules = ['propertyType', 'homeCondition', 'cost']
            executedRules = ['yearBuilt', 'homeCondition']
        });

        it("returns homeCondition", () => {
            const result = findDuplicates(failedRules, executedRules);
            console.log(result)
            assert.deepStrictEqual(result, ['homeCondition'])
        });
    });

    describe("More executedRules", () => {
        beforeEach(() => {
            failedRules = ['propertyType', 'homeCondition', 'cost']
            executedRules = ['yearBuilt', 'abc', 'dfg', '2gnewRule', 'homeCondition', 'cost']
        });

        it("returns homeCondition", () => {
            const result = findDuplicates(failedRules, executedRules);
            console.log(result)
            assert.deepStrictEqual(result, ['homeCondition', 'cost'])
        });
    });

    describe("Filters repeated rules", () => {
        beforeEach(() => {
            failedRules = ['hasFleas','propertyType', 'homeCondition', 'cost', 'hasFleas', ]
            executedRules = ['yearBuilt', 'abc', 'dfg', 'hasFleas', 'homeCondition', 'cost', 'hasFleas']
        });

        it("returns homeCondition", () => {
            const result = findDuplicates(failedRules, executedRules);
            console.log(result)
            assert.deepStrictEqual(result, ['hasFleas','homeCondition', 'cost'])
        });
    });

    describe("No rules match", () => {
        beforeEach(() => {
            failedRules = ['propertyType', 'homeCondition', 'cost', 'hasFleas', ]
            executedRules = ['yearBuilt', 'abc', 'dfg', 'isFarAway','isVeryOld']
        });

        it("returns homeCondition", () => {
            const result = findDuplicates(failedRules, executedRules);
            console.log(result)
            assert.deepStrictEqual(result, [])
        });
    });

});
