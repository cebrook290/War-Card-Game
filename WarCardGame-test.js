var expect = chai.expect

describe('MyFunctions', function (){
    describe('#declareWinner', function() {
        it('should declare a winner', function() {
            let w = declareWinner();
            expect(w).to.equal(winner.toUpperCase() + ' WINS!!');
        });
    });
});