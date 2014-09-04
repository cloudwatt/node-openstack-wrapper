var util = require('util');
var Nova = require('../lib/nova.js');
var nova = new Nova('mock_url', 'mock_token');

//returns a mock request object for dependency injection with the get method calling back with the given 3 values
function getMockRequest(return_error, return_status_code, return_response)
{
  function mockVerb(options_array, callback)
  {
    callback(return_error, {statusCode: return_status_code}, return_response);
  }
  
  var return_object = {
    get:mockVerb,
    post: mockVerb,
    patch: mockVerb,
    put: mockVerb,
    del: mockVerb
  };
  
  return return_object;
}



//tests Nova.Instance.list()
exports.listInstances = {
  setUp: function(callback){
    callback();
  },
  
  confirmArrayOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {servers:[{status: 'ACTIVE'}]});
    nova.setRequest(mock_request);
    
    nova.listInstances(function(error, result){
      test.ifError(error, 'There should be no error');
      test.equal(result[0].status, 'ACTIVE', 'value should be "ACTIVE"');
      test.done();
    });
  },
  
  confirmErrorOnInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.listInstances(function(error, result){
      test.ok(error, 'There should be an error object');
      test.done();
    });
  },
  
  confirmEmptyArrayOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.listInstances(function(error, result){
      test.ok(error, 'There should be an error object');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.listInstances(function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};




//tests Nova.Instance.get()
exports.instance_get = {
  confirmObjectOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {server:{status: 'ACTIVE'}});
    nova.setRequest(mock_request);
    
    nova.getInstance('mock_id', function(error, result){
      test.ifError(error, 'There should be no error');
      test.equal(result.status, 'ACTIVE', 'value should be "ACTIVE"');
      test.done();
    });
  },
  
  confirmErrorInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.getInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.getInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.getInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



//tests Nova.Instance.create()
exports.createInstance = {
  confirmObjectOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {server:{status: 'ACTIVE'}});
    nova.setRequest(mock_request);
    
    nova.createInstance('mock_id', function(error, result){
      test.ifError(error, 'There should be no error');
      test.equal(result.status, 'ACTIVE', 'value should be "ACTIVE"');
      test.done();
    });
  },
  
  confirmErrorInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.createInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.createInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.createInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.renameInstance = {
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.renameInstance('mock_id', 'mock_name', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};




exports.resizeInstance = {
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.resizeInstance('mock_id', 'mock_name', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.confirmResizeInstance = {
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.confirmResizeInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.revertResizeInstance = {
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.revertResizeInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.removeInstance = {
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.removeInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.rebootInstance = {
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.rebootInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.forceRebootInstance = {
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.rebootInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.stopInstance = {
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.stopInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.startInstance = {
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.startInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.pauseInstance = {
  confirmTrueOn200: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh: 'meh'});
    nova.setRequest(mock_request);
    
    nova.pauseInstance('mock_id', function(error, return_value){
      test.ifError(error, 'There should be no error');
      test.equal(return_value, true, 'value should be boolean true');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.pauseInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.suspendInstance = {
  confirmTrueOn200: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh: 'meh'});
    nova.setRequest(mock_request);
    
    nova.suspendInstance('mock_id', function(error, return_value){
      test.ifError(error, 'There should be no error');
      test.equal(return_value, true, 'value should be boolean true');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.suspendInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.resumeInstance = {
  confirmTrueOn200: function(test)
  {
    //can't use the normal getMockRequest here as there are actually 2 requests in this function
    //first a get in getById then a post in the actual function
    var mock_request = {
      get: function(options_array, callback){
        callback(null, {statusCode: 200}, {server: {status: 'PAUSED'}});
      },
      post: function(options_array, callback){
        callback(null, {statusCode: 200}, {meh: 'meh'});
      }
    };
    nova.setRequest(mock_request);
    
    nova.resumeInstance('mock_id', function(error, return_value){
      test.ifError(error, 'There should be no error');
      test.equal(return_value, true, 'value should be boolean true');
      test.done();
    });
  },
  
  
  confirmErrorOnInvalidState: function(test)
  {
    var mock_request = getMockRequest(null, 200, {server: {status: 'notpausedorsuspended'}});
    nova.setRequest(mock_request);
    
    nova.resumeInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  
  confirmErrorOnNon200: function(test)
  {
    //can't use the normal getMockRequest here as there are actually 2 requests in this function
    //first a get in getById then a post in the actual function
    var mock_request = {
      get: function(options_array, callback){
        callback(null, {statusCode: 200}, {server: {status: 'PAUSED'}});
      },
      post: function(options_array, callback){
        callback(null, {statusCode: 500}, 'meh');
      }
    };
    nova.setRequest(mock_request);
    
    nova.resumeInstance('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.getInstanceConsoleUrl = {
  confirmURLOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {console: {url: 'http://something'}});
    nova.setRequest(mock_request);
    
    nova.getInstanceConsoleUrl('mock-type', 'mock_id', function(error, result){
      test.ifError(error, 'There should be no error');
      test.equal(result, 'http://something', 'value should be boolean "http://something"');
      test.done();
    });
  },
  
  confirmErrorInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.getInstanceConsoleUrl('mock-type', 'mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.getInstanceConsoleUrl('mock-type', 'mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.getInstanceConsoleUrl('mock-type', 'mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.getInstanceLog = {
  confirmErrorInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.getInstanceLog('mock_id', 50, function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.getInstanceLog('mock_id', 50, function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.getInstanceLog('mock_id', 50, function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.createImage = {
  confirmResponseOnSuccess: function(test)
  {
    var mock_request = {
      post: function(options_array, callback){
        callback(null, {statusCode: 200, headers: {location: '/images/image_id'}}, {output: {result: 'result'}});
      }
    };
    nova.setRequest(mock_request);
    
    nova.createImage('mock_id', {meh: 'meh'}, function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual({result: 'result', ImageId: 'image_id'}, result, 'value should be {result: "result", ImageId: "image_id"}');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.createImage('mock_id', {meh: 'meh'}, function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};


//tests Nova.Instance.setMetadata()
exports.setInstanceMetadata = {
  confirmResponseOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {x:'x'});
    nova.setRequest(mock_request);
    
    nova.setInstanceMetadata('mock_id', {meh: 'meh'}, function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual({x:'x'}, result, 'value should be {x: "x"}');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.setInstanceMetadata('mock_id', {meh: 'meh'}, function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.listFlavors = {
  confirmErrorOnInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.listFlavors(function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.listFlavors(function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.listFlavors(function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};


exports.getFlavor = {
  confirmErrorOnInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.getFlavor("id", function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.getFlavor("id", function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.getFlavor("id", function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.floatinglistFloatingIpsip_list = {
   confirmArrayOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {floating_ips:[{status: 'ACTIVE'}]});
    nova.setRequest(mock_request);
    
    nova.listFloatingIps(function(error, result){
      test.ifError(error, 'There should be no error');
      test.equal(result[0].status, 'ACTIVE', 'value should be "ACTIVE"');
      test.done();
    });
  },
  
  confirmEmptyArrayOnInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.listFloatingIps(function(error, result){
      test.ifError(error, 'There should be no error');
      test.equal(util.isArray(result), true, 'value should be an array');
      test.equal(result.length, 0, 'value should be an empty array');
      test.done();
    });
  },
  
  confirmEmptyArrayOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.listFloatingIps(function(error, result){
      test.ifError(error, 'There should be no error');
      test.equal(util.isArray(result), true, 'value should be an array');
      test.equal(result.length, 0, 'value should be an empty array');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.listFloatingIps(function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.getFloatingIp = {
   confirmObjectOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {floating_ip: {meh: 'meh'}});
    nova.setRequest(mock_request);
    
    nova.getFloatingIp('mock_id', function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(result, {meh: 'meh'}, 'value should be an object {meh: "meh"}');
      test.done();
    });
  },
  
  confirmErrorOnInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.getFloatingIp("id", function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.getFloatingIp("id", function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.getFloatingIp("id", function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.createFloatingIp = {
  confirmErrorOnInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.createFloatingIp({}, function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.createFloatingIp({}, function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {    
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.createFloatingIp({}, function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.removeFloatingIp = {
  confirmObjectOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh: 'meh'});
    nova.setRequest(mock_request);
    
    nova.removeFloatingIp('mock_id', function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(result, {meh: 'meh'}, 'value should be an object {meh: "meh"}');
      test.done();
    });
  },
  
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.removeFloatingIp("id", function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.associateFloatingIp = {
  confirmObjectOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh: 'meh'});
    nova.setRequest(mock_request);

    nova.associateFloatingIp('mock_id', 'mock-address', function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(result, {meh: 'meh'}, 'value should be an object {meh: "meh"}');
      test.done();
    });
  },
  
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.associateFloatingIp("mock_id", 'mock-address', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.disassociateFloatingIp = {
  confirmObjectOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh: 'meh'});
    nova.setRequest(mock_request);
    
    nova.disassociateFloatingIp('mock_id', 'mock-address', function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(result, {meh: 'meh'}, 'value should be an object {meh: "meh"}');
      test.done();
    });
  },
  
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.disassociateFloatingIp("mock_id", 'mock-address', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.listIpPools = {
   confirmArrayOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {floating_ip_pools:[{name: 'testid'}]});
    nova.setRequest(mock_request);
    
    nova.listIpPools(function(error, result){
      test.ifError(error, 'There should be no error');
      test.equal(result[0].id, 'testid', 'value should be "testid"');
      test.done();
    });
  },
  
  
  confirmEmptyArrayOnInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.listIpPools(function(error, result){
      test.ifError(error, 'There should be no error');
      test.equal(util.isArray(result), true, 'value should be an array');
      test.equal(result.length, 0, 'value should be an empty array');
      test.done();
    });
  },
  
  
  confirmEmptyArrayOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.listIpPools(function(error, result){
      test.ifError(error, 'There should be no error');
      test.equal(util.isArray(result), true, 'value should be an array');
      test.equal(result.length, 0, 'value should be an empty array');
      test.done();
    });
  },
  
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.listIpPools(function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.getIpPool = {
  confirmObjectOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {floating_ip_pools:[{name: 'testid'}]});
    nova.setRequest(mock_request);
    
    nova.getIpPool('testid', function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(result, {id: 'testid'}, 'value should be an object {id: "testid"}');
      test.done();
    });
  },
  
  confirmErrorOnFail: function(test)
  {
    var mock_request = getMockRequest(null, 200, {floating_ip_pools:[{name: 'testid'}]});
    nova.setRequest(mock_request);
    
    nova.getIpPool("not-testid", function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.listZones = {
  confirmArrayValuesOnSuccess: function(test)
  {
    var response_object = {availabilityZoneInfo:[{zoneName: 'testname', zoneState: {available: 'yes'}}]}; //this is mock-response from OS
    var test_array = [{id: 'testname', name: 'testname', available: 'yes'}]; //this is mutated result we should get back from zone.list
    
    var mock_request = getMockRequest(null, 200, response_object);
    nova.setRequest(mock_request);
    
    nova.listZones(function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(test_array, result, 'value should match object: ' + JSON.stringify(test_array));
      test.done();
    });
  },
  
  confirmErrorOnInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.listZones(function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.listZones(function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.listZones(function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.getZone = {
  confirmObjectOnSuccess: function(test)
  {
    var response_object = {availabilityZoneInfo:[{zoneName: 'testname', zoneState: {available: 'yes'}}]}; //this is mock-response from OS
    var test_object = {id: 'testname', name: 'testname', available: 'yes'}; //this is mutated result we should get back from zone.get
    var mock_request = getMockRequest(null, 200, response_object);
    nova.setRequest(mock_request);
    
    nova.getZone('testname', function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(result, test_object, 'value should be an object: ' + JSON.stringify(test_object));
      test.done();
    });
  },
  
  confirmErrorOnNonSuccess: function(test)
  {
    var response_object = {availabilityZoneInfo:[{zoneName: 'testname', zoneState: {available: 'yes'}}]}; //this is mock-response from OS
    var mock_request = getMockRequest(null, 200, response_object);
    nova.setRequest(mock_request);
    
    nova.getZone("not-testname", function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.listSSHKeys = {
  confirmArrayValuesOnSuccess: function(test)
  {
    var response_object = {keypairs:[{keypair: {thing: 'stuff'}}]}; //this is mock-response from OS
    var test_array = [{thing: 'stuff'}]; //this is mutated result we should get back from key.list
    
    var mock_request = getMockRequest(null, 200, response_object);
    nova.setRequest(mock_request);
    
    nova.listSSHKeys(function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(test_array, result, 'value should match object: ' + JSON.stringify(test_array));
      test.done();
    });
  },
  
  confirmBlankArrayOnInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.listSSHKeys(function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(result, [], 'value should be a blank array');
      test.done();
    });
  },
  
  confirmBlankArrayOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.listSSHKeys(function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(result, [], 'value should be a blank array');
      test.done();
    });
  },
  
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.listSSHKeys(function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.getSSHKey = {
  confirmObjectOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {keypair: {meh: 'meh'}});
    nova.setRequest(mock_request);
    
    nova.getSSHKey('mock_id', function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(result, {meh: 'meh'}, 'value should be an object {meh: "meh"}');
      test.done();
    });
  },
  
  confirmErrorOnInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.getSSHKey('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.getSSHKey('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.getSSHKey('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.createSSHKey = {
  confirmObjectOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {keypair: {meh: 'meh'}});
    nova.setRequest(mock_request);
    
    nova.createSSHKey('mock_name', 'mock-key', function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(result, {meh: 'meh'}, 'value should be an object {meh: "meh"}');
      test.done();
    });
  },
  
  confirmErrorOnInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.createSSHKey('mock_name', 'mock-key', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.createSSHKey('mock_name', 'mock-key', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnNon200: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.createSSHKey('mock_name', 'mock-key', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.removeSSHKey = {
  confirmSuccessOn200: function(test)
  {
    var mock_request = getMockRequest(null, 200, {keypair: {meh: 'meh'}});
    nova.setRequest(mock_request);
    
    nova.removeSSHKey('mock_id', function(error, result){
      test.ifError(error, 'There should be no error');
      //I think thats all we can test for...
      test.done();
    });
  },
  
  confirmErrorOn500: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.removeSSHKey('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.getQuota = {
  confirmValueOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {quota_set: {ram: 16384}});
    nova.setRequest(mock_request);
    
    nova.getQuota('mock_id', function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(result, {ram_mb: 16384}, 'value should be an object {ram_mb: 16384}');
      test.done();
    });
  },
  
  confirmErrorOnInvalidJSONBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh:'meh'});
    nova.setRequest(mock_request);
    
    nova.getQuota('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOnInvalidStringBody: function(test)
  {
    var mock_request = getMockRequest(null, 200, 'meh');
    nova.setRequest(mock_request);
    
    nova.getQuota('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  },
  
  confirmErrorOn500: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.getQuota('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.getUsage = {
  confirmValuesOnSuccess: function(test)
  {
    //this is the format of whats coming back from OS
    var mock_data = {tenant_usage: {server_usages: []}};
    mock_data.tenant_usage.server_usages[0] = {local_gb: 20, memory_mb: 1024, vcpus: 1, flavor: 'm1.tiny'};
    mock_data.tenant_usage.server_usages[1] = {local_gb: 40, memory_mb: 1024, vcpus: 2, flavor: 'm1.small'};
    
    //this should be the format of the result from the nova.usage.list function call
    var test_object = {local_gb: 60, memory_mb: 2048, vcpus: 3, instances: 2, flavors: {'m1.tiny': 1, 'm1.small': 1}};
    
    var mock_request = getMockRequest(null, 200, mock_data);
    nova.setRequest(mock_request);
    
    nova.getUsage('mock_id', function(error, result){
      test.ifError(error, 'There should be no error');
      test.deepEqual(result, test_object, 'value should be an object: ' +  JSON.stringify(test_object));
      test.done();
    });
  },
  
  confirmErrorOn500: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.getUsage('mock_id', function(error, result){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.assignSecurityGroup = {
  confirmNoErrorOn200: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh: 'meh'});
    nova.setRequest(mock_request);
    
    nova.assignSecurityGroup('mock_name', 'mock_id', function(error, response){
      test.ifError(error, 'There should be no error');
      test.done();
    });
  },
  
  confirmErrorOn500: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.assignSecurityGroup('mock_name', 'mock_id', function(error, response){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};



exports.removeSecurityGroup = {
  confirmValuesOnSuccess: function(test)
  {
    var mock_request = getMockRequest(null, 200, {meh: 'meh'});
    nova.setRequest(mock_request);
    
    nova.removeSecurityGroup('mock_name', 'mock_id', function(error, response){
      test.ifError(error, 'There should be no error');
      test.done();
    });
  },
  
  confirmErrorOn500: function(test)
  {
    var mock_request = getMockRequest(null, 500, 'Our server just borked');
    nova.setRequest(mock_request);
    
    nova.removeSecurityGroup('mock_name', 'mock_id', function(error, response){
      test.ok(error, 'We should receive an error object');
      test.done();
    });
  }
};
