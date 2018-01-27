/**
 * Created by guru on 24/01/18.
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


module.exports = function (instanceId,cb) {
    var params = {
        IncludeAllInstances: true,

        InstanceIds: [
            instanceId,
        ],
    };
    ec2.describeInstanceStatus(params, function(err, data) {
        cb(err,data)
    });
};

/*ec2.describeInstances(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});*/

