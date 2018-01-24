/**
 * Created by guru on 24/01/18.
 */
const assert = require('chai').assert;
const app = require('../get_instance_info');
const create = require('../create_instance');



/*
    1. create an instance
    2. capture the instance id
    3. stop/terminate instance
    4. validate sure it is stopped
 */

var instanceId;
describe('App', function () {
    it('create aws ec2 instance', function (done) {
        create(function(err,data,InstanceId){
            console.log(err);
            assert(err==undefined);
            console.log("instance id is "+InstanceId);
            instanceId=InstanceId;

            done()
        })
    });

    it('validate that instance created', function (done) {
        if (!instanceId) throw  new Error("no instance id");

        app(instanceId,function(err,data){
            assert(err==undefined);
            console.log(data.InstanceStatuses[0].InstanceState.Name);
            // console.log(data.InstanceStatuses[0].InstanceStatus);
            console.log(typeof data)
            assert(data.InstanceStatuses[0].InstanceState.Name=="stopped");
            done()
        })
    });
});


/*
describe('App', function () {
    it('get instance test', function (done) {
        app(function(err,data){
            assert(err==undefined);
            console.log(data.InstanceStatuses[0].InstanceState.Name);
            // console.log(data.InstanceStatuses[0].InstanceStatus);
            console.log(typeof data)
            assert(data.InstanceStatuses[0].InstanceState.Name=="stopped");
            done()
        })
    });
});*/
