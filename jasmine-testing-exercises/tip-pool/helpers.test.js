describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 50;
      submitPaymentInfo();
        
  
    });

    it('Should sum the total tip amount on all payments sumPaymentTotal()', function () {
      billAmtInput.value = 200;
      tipAmtInput.value = 100;

      submitPaymentInfo();

      expect(sumPaymentTotal(`tipAmt`)).toEqual(150);



    });

    it(' calculateTipPercent()', function () {
      //did not get around to this, will talk about it later during mentoring
    });
    
    it(' appendTd()', function () {
      //did not get around to this, will talk about it later during mentoring
      //will also talk about the extra parts

    });

    afterEach(function(){
      billAmtInput.value = ``;
      tipAmtInput.value = ``;
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;


    });

});
