/**
 * Created by guru on 23/01/18.
 */

const AWS = require('aws-sdk');

// Set the region

// new
AWS.config.update(
    {
        region: 'ap-southeast-2',
        accessKeyId: 'AKIAI__DUMMY__PIJEB3BQ',
        secretAccessKey: 'boXgC__DUMMY__2+7kL__DUMMY__r1cmvK__DUMMY__sZcIj'
    }
);


// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});




module.exports = function (instanceId, cb) {
    var params = {
        InstanceIds: [ /* required */
            instanceId//'i-0485242f7fc960da5',
            /* more items */
        ],
        // DryRun: true || false,
        // Force: true || false
    };

    ec2.stopInstances(params, function (err, data) {
        cb(err, data)
    });
}

