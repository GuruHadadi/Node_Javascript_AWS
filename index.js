const AWS = require('aws-sdk');

// Set the region

// new
AWS.config.update(
    {
        region: 'ap-southeast-2',
        accessKeyId: 'AKIAI4YONWGG664PITHA',
        secretAccessKey: '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'
    }
);

/*
AWS.config.update(
    {
        region: 'ap-southeast-2',
        // accessKeyId: 'AKIAIHVZ5QTYRZD4XUTA',
        accessKeyId: 'AKIAICDON6M52SKXMDZA',
        secretAccessKey: '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'
    }
);

*/

// AWS_PROFILE=default node index.js

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var params = {
    ImageId: 'ami-29545f4a', // amzn-ami-2011.09.1.x86_64-ebs
    InstanceType: 't2.nano',
    MinCount: 1,
    MaxCount: 1
};

// Create the instance
ec2.runInstances(params, function(err, data) {
    if (err) {
        console.log("Could not create instance", err);
        return;
    }
    var instanceId = data.Instances[0].InstanceId;
    console.log("Created instance", instanceId);
    // Add tags to the instance
    params = {Resources: [instanceId], Tags: [
        {
            Key: 'Name',
            Value: 'SDK Sample'
        }
    ]};
    ec2.createTags(params, function(err) {
        console.log("Tagging instance", err ? "failure" : "success");
    });
});


