var request = require("supertest")
  , expect = require("chai").expect
  , http = require("http");

var express = require("../");

describe("Implement Empty App",function() {
  var app = express();
  describe("as handler to http.createServer",function() {
    it("responds to /foo with 404", function(done) {
      var server = http.createServer(app);
      request(server).get("/foo").expect(404).end(done);
    });
  });

  describe("Defining the app.listen method",function() {
    var port = 7001;
    var server = app.listen(port);

    // it("should have listen as a prototype method", function() {
    //   expect(app.__proto__.listen).to.be.a("function");
    // });

    // it("should not extend the Function prototype", function() {
    //   expect(Function.listen).to.be.undefined;
    // });

    it("should return an http.Server",function() {
      expect(server).to.be.instanceof(http.Server);
    });

    it("responds to /foo with 404",function(done) {

      request("http://localhost:" + port).get("/foo").expect(404).end(done);
    })
  });




});