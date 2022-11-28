describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';

  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not create new server on submitServerInfo() with an empty input', function (){
    
    serverNameInput.value = ``;
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);

    /*
     tried this, had issues as it wasn't equal to an empty string due to
    existing html elements <tbody></tbody> and had to look at the solution
    */
    //expect(serverTbody.innerHTML).toEqual(``);

  });


  it('should update #servertable on updateServerTable()', function () {
    //let serverTbody = document.querySelector('#serverTable tbody');

    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toEqual('$0.00');
    expect(curTdList[2].innerText).toEqual('X');

  });

  afterEach(function() {
    // teardown logic
    //serverNameInput.value = '';
    /*
    We do not need to clear the name input as it is already done
    on submitServerInfo in server.js 
    */

    //document.getElementById(`server`+serverId).remove()
    //allServers = {};

    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;

    /*
    We do not need to iterate over the full array as we only have one test value
    */
    // for (let key in allServers) {
    //   let curServer = allServers[key];
    // }

  });
});
