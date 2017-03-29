var MikroNode = require('mikronode');
 
 var device = new MikroNode('192.168.1.1');
 device.connect(process.argv[2],process.argv[3]).then(function(conn) {
    var chan=conn.openChannel("addresses"); // open a named channel
    chan.write('/ip/address/print');
    chan.on('done',function(data) {
        // data is all of the sentences in an array.
        data.data.forEach(function (item) {
            item.forEach(function(str) {
                console.log('Interface/IP: ' + str.field + "/" + str.value);

            })
    });

          chan.close(); // close the channel.
          conn.close(); // when closing connection, the socket is closed and program ends.

       });

 });
