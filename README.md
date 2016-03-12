# generator-csharp-flow

Work in progress to scaffold templates for the data access layer in Buildium.

#Usage

Install Yeoman

```
npm install -g yo
```

Install this generator via npm:

```
npm install --g generator-csharp-flow
```

Run the entity, service, and manager sub generator using:

```
yo csharp-flow:entity-service-manager entity-name
```

Using the argument as a name, this command will createboilerplate files for your component:

```
DataProject\
  Api\Services\Entity\IEntityService.cs
  Api\Services\Entity\EntityService.cs
  Managers\Entity\IEntityManager.cs
  Managers\EntityEntityManager.cs
  Entities\Entity\Entity.cs
```

It's recommended to install [Yeoman.VisualStudio](https://github.com/ryansmith940/Yeoman.VisualStudio),
and run your C# generators through the Package Manager console with the correct default project
if you want files to be automatically added to your .csproj files.

#Options

When creating your entity and associated service, manager, and interfaces, you will be given an option to create
these files in an existing domain folder - so if you have an Accounting folder, and you're scaffolding a flow
related to accounting, you can input that when prompted and your files will be created in, for example,
Api/Services/Accounting/EntityService
