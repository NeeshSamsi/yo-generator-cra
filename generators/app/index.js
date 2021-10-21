"use strict";

// Requiring Dependancies
var yeoman = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");

module.exports = yeoman.generators.Base.extend({
  // Configuration will be loaded here // dunno what this means

  // Ask for User Input
  // prompt is how to get input
  prompting: function () {
    // this.async() so that the functions waits, and doesn't complete before tasks are completed
    var done = this.async();
    this.prompt(
      {
        type: "input",
        // name is the value you can access in the callback
        name: "name",
        // placeholder for the client
        message: "Your project name",

        // Defaults to the project's folder name if the input is skipped
        default: this.appname,
      },
      // Callback that has access to the answers of inputs
      function (answers) {
        // Adding answers to this.props
        this.props = answers;
        this.log(answers.name);
        done();
      }.bind(this)
    );
  },

  // Writing logic here
  // writing is where the main stuff happens
  writing: {
    // copy() takes this.templatePath() and this.destinationPath() [within the templates directory - use this to rename any files]
    // copyTpl() accepts the two and a third { name: this.props.name } with props that can be accessed within the template file using <%= name %>

    // Copy config files
    config: function () {
      this.fs.copyTpl(this.templatePath(""), this.destinationPath(""), { name: this.props.name });
    },

    // Copy application files
    // Install dependancies
  },
});
