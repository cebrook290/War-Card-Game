var expect = chai.expect

describe('MyFunctions', function (){
    describe('#declareWinner', function() {
        it('should declare player one the winner', function() {
            let w = declareWinner();
            expect(w).to.equal(playerOneName.toUpperCase() + ' WINS!!');
        });
        it('should declare player two the winner', function() {
            expect(declareWinner()).to.equal(playerTwoName.toUpperCase() + ' WINS!!');
        });
    });
});