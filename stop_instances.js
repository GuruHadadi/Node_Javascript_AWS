/**
 * Created by guru on 23/01/18.
 */

const AWS = require('aws-sdk');

// Set the region

// new
AWS.config.update(
    {
        region: 'ap-southeast-2',
        accessKeyId: 'AKIAIM_DUMMY_JEB3BQ',
        secretAccessKey: 'boXgCHa_DUMMY_asfdsafdsf1cmvKHJeo6zC/sZcIj'
    }
);


// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});


var params = {
    InstanceIds: [ /* required */
        'i-0485242f7fc960da5',
        /* more items */
    ],
    // DryRun: true || false,
    // Force: true || false
};

ec2.stopInstances(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});

