var generators = require('yeoman-generator');
var chalk = require('chalk');

var prompts = [{
      type    : 'input',
      name    : 'existingFolderName',
      message : 'Would you like to create these files in existing an domain folder? If so, enter the folder name.',
      default : 'none'
    }];


module.exports = generators.Base.extend({
    constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument('entityname', { type: String, required: true });
  },
  checkProjectConfig: function() {
    var dataAccessProjectNamespace = this.config.get('dataAccessProjectNamespace');
        var done = this.async();

        if(typeof dataAccessProjectNamespace === 'undefined') {
            this.prompt({
              type    : 'input',
              name    : 'dataAccessProjectNamespace',
              message : 'Looks like you do not have your config file set up! What is the namespace for your data access project?'
            }, function dataAccessProjectNamespaceAnswer(answers) {
                this.config.set('dataAccessProjectNamespace', answers.dataAccessProjectNamespace);
                done();
            }.bind(this));
          }
          done();
  },
  createFiles: function() {
    var done = this.async();
    var name = this.entityname;

    this.prompt(prompts, function promptCallback(answers) {
      var containingFolderName = name;

      if(answers.existingFolderName != 'none') {
        containingFolderName = answers.existingFolderName;
      }

      var servicesNamespace = this.config.get('dataAccessProjectNamespace') + '.Api.Services.' + containingFolderName;
      var managersNamespace = this.config.get('dataAccessProjectNamespace') + '.Managers.' + containingFolderName;
      var entitiesNamespace = this.config.get('dataAccessProjectNamespace') + '.Entities.' + containingFolderName;
      var entitiesDependency = 'Buildium.Enterprise.Framework.Entities';

      this.fs.copyTpl(
        this.templatePath('iservice.cs'),
        this.destinationPath('Api/Services/' + containingFolderName + '/I' + name + 'Service.cs'),
          { fileName: name, namespace: servicesNamespace }
      );

      this.fs.copyTpl(
        this.templatePath('service.cs'),
        this.destinationPath('Api/Services/' + containingFolderName + '/' + name + 'Service.cs'),
          { fileName: name , namespace: servicesNamespace }
      );

      this.fs.copyTpl(
        this.templatePath('imanager.cs'),
        this.destinationPath('Managers/' + containingFolderName + '/I' + name + 'Manager.cs'),
          { fileName: name, namespace: managersNamespace }
      );

      this.fs.copyTpl(
        this.templatePath('manager.cs'),
        this.destinationPath('Managers/' + containingFolderName + '/' + name + 'Manager.cs'),
          { fileName: name, namespace: managersNamespace }
      );

      this.fs.copyTpl(
        this.templatePath('entity.cs'),
        this.destinationPath('Entities/' + containingFolderName + '/' + name + '.cs'),
          { fileName: name , namespace: entitiesNamespace,
            dependencyFilePath: entitiesDependency }
      );

      done();
    }.bind(this));
  },
  complete: function() {
    this.log(chalk.bold.green('Successfully created new files...'));
  }
});
