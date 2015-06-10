# latté
A flexible and powerful CMS for Node.js, using the power of Express and MongoDB.
This CMS is based on the power of items as data source and flexible renderings.
It will be easily extensible, flexible, and robust.

*At this stage, latte is in __alpha__. It does not work at all. Sorry folks.*

##How to compile
In order to build the solution, you will need to install a few tools. Make sure you execute the `npm install` command to get the gulp components. You will also need to install globally:
- tslint (2.2.0-beta)
- gulp (3.9.0)
- tsd (optional, but you will have to provide the Typescript definitions manually) (0.6.1)
- typescript (1.5.0-beta)

###Preparing the solution
Make sure you browse to the ./src/host folder and execute the `tsd reinstall` command. This will download the required definition files for the project.

*This step will not be required in the future. We are working on an automated gulp task for it.*

###Compiling the solution
Place your shell to the root of the solution and run `gulp build-ts-host`. This will lint the typescript, compile it to Javascript (which will be outputed to the *./www* folder)
and will generate the sourcefiles maps.