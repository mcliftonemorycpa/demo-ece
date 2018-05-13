# Emory University - Dev Starter Kit

These instructions will get you a copy of the starer kit up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

Be sure to have the following installed:

* [Node.js](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/downloads)
* [Visual Studio Code](https://code.visualstudio.com/download)

## Built With

If you are not already, familiarize yourself with the following:

* [Boostrap 4](https://getbootstrap.com/) - Web framework
* [Gulp](https://gulpjs.com/) - Workflow automation
* [Sass](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html) - CSS preprocessor
* [Nunjucks](https://mozilla.github.io/nunjucks/) - Javascript-based HTML templating language

## Getting Started

1. Download this project to your local machine.
2. Make a new repository on the EmoryCPA github account.
3. Add yourself as a collaborator: Settings > Collaborators > you@emory.edu
4. Check your email for the collaboration invite and accept.
5. Open the project you downloaded and Git Bash inside the base folder.
5. Follow the instructions to initialize the new repository.
```
echo "# new.project.name" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/emorycpa/new.project.name.git
git push -u origin master
```
7. Open your project in Visual Studio Code.
8. Go to the Source Control tab and stage, commit, and push all the files to your new repository.
9. Update README.md for the new repository.

## Navigating the template

All development, code, and markup modification should occur inside the `src/` directory. Source files for vector and raster graphics, PDFs, and other guides should be placed inside the `design-documents/` directory.

Inside the `src/` directory:

* `fonts/` - Webfonts
* `js/` - Javascript
* `njk/` - Nunjucks (HTML)
* `scss/` - Sass (CSS)

### Understanding the template parts

Inside the `njk/` directory:

* `pages/` - All generic page layouts and types
* `templates/` - Small bits of markup that are put together to form entire pages

Inside the `templates/` directory is the *layout.njk* file. This determines general structure of every page.

A majority of the development will occur inside the `templates/partials/` directory. By default, several generic folders and files already exist to give a headstart. This structure can be changed to accommodate the project's needs, but consistency among all Emory project templates is important.

Inside `templates/partials/`:

* `global/` - Components that occur across every webpage such as the header and footer
* `snippet/` - Small blocks of standalone markup, such as blockquotes or lists
* `component/` - Complete items such as Carousels or Modals which may contain several Snippets
* `section/` - Large blocks of content that builds out a section of a page which may contain several Components or Snippets
* `wysiwyg/` - Small bits of placeholder markup used specifically for populating generic content into WYSIWYG areas in the template

### Understanding the SASS structure

Inside the `scss/` directory:

* `abstracts/` - Sass functions, mixins, variables, animations, and font declarations
* `base/` - Rules that apply sitewide. Accessibility, custom helper classes, typography, WYSIWYG
* `components/` - Individual component rules for headers, footers, and custom widgets. Add new components as needed
* `vendor/` - Third-party stylesheets
* *site.scss* - Imports all other styles into one stylesheet

## Installing node_modules and launching Local Host

Once you have cloned this repository, open the command line and run:

```
npm i
```

Then once all Node modules are installed, run:

```
gulp watch:serve
```

This will launch a page in your default browser on localhost:3000.

## Deployment

All compiled files (HTML, CSS, JS, fonts, images, etc.) will be found under the `docs/` directory.

## Authors

* **Bryce Roberts** - *Initialization* - [bryce.leitner.roberts@gmail.com](mailto:bryce.leitner.roberts@gmail.com)
* **Kayla Pratt** - *Front-end templatizing* - [kaylapratt.com](http://kaylapratt.com)

See also the list of [contributors](https://github.com/emorycpa/emory.dev/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
# demo.ece
