describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 50;
  
    });

    it('Should not add new entry with empty input on submitPaymentInfo()', function () {
        billAmtInput.value = ``;

        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
        
        /*
        createCurPayment already checks if it is an empty string
        on either input and if greater than 0
        */
    });

    it(`should add a new payment to allPayments on submitPaymentInfo()`, function() {
        submitPaymentInfo();
        createCurPayment();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments[`payment1`].billAmt).toEqual(`100`);
        expect(allPayments[`payment1`].tipAmt).toEqual(`50`);
        expect(allPayments[`payment1`].tipPercent).toEqual(50);


    });

    it(`Check typeOf for submitPaymentInfo()`, function() {
        submitPaymentInfo();
        createCurPayment();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(typeof allPayments[`payment1`].billAmt).toEqual(`number`);
        expect(typeof allPayments[`payment1`].tipAmt).toEqual(`number`);
        expect(typeof allPayments[`payment1`].tipPercent).toEqual(`number`);


    });

    it('Should create new payment for createCurPayment()', function () {
        let expectedPayment = {
            billAmt : `100`,
            tipAmt : `50`,
            tipPercent : 50
        }
        expect(createCurPayment()).toEqual(expectedPayment);

    });
    
    it('Should update #paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments[`payment1`] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList[0].innerText).toEqual(`$100`)
        expect(curTdList[1].innerText).toEqual(`$50`)
        expect(curTdList[2].innerText).toEqual(`50%`)



    });
    /*
    it(` updateSummary()`, function (){


    });
    */
    afterEach(function (){
        billAmtInput.value = ``;
        tipAmtInput.value = ``;
        allPayments = {};
        paymentId = 0;
        serverTbody.innerHTML = '';
        paymentTbody.innerHTML = '';
// solution has this, but may not be needed, cleaner if we do this
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';

    });

});