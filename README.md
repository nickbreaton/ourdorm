THIS APPLICATION IS A __WORK IN PROGRESS__ AND SHOULD __NOT__ BE USED IN A PRODUCTION ENVIRONMENT.

# uncc-reminders

Never miss a Canvas assignment.

This application integrates with [Canvas by Instrcture](https://canvas.instructure.com/) and will send you a text message at a specified time before an incomplete assignment is due.

## Technical Requirements

This application is for my semester long project in Web-Based Application Development (ITIS 2300) at UNC Charlotte.

All of the following technologies must be used:

> HTML, CSS, JavaScript, jQuery, PHP and Interactive Elements of Design

This project must adhere to all of the following requirements:

> Your web application should provide a service for an individual, group, or business that you care about.
The web application should provide a service that does not yet exist, or an improved design and
implementation of an extended existing service. The web application can improve the visibility of the
stakeholder, enable better communication among the individuals in the stakeholder group, and improve
the recruitment of people and funds to the stakeholder group. Your web application must have a
stakeholder or stakeholder group to whom you report.

This project must also meet one of the following requirements: (2)

> 1. Develop a web application for an individual that you know to promote their professional or
community projects.

> 2. Develop a web application for a community group to encourage communication about activities
and projects.

> 3. Develop a web application for a student group at UNCC that encourages participation and
communication such as 49ers Security division or HCI Interact.

> 4. Develop an online game for learning about the basics of javascript, CSS or any other scripting
language.

## Development

### Getting Started

1. Install all dependencies as listed in the __Dependencies__ section of this document, and install all code dependencies with npm:

  ```sh
  npm install
  ```

  __Note:__ This project also uses [Composer](https://getcomposer.com/) to install PHP dependencies, however, npm installs Composer via the [getcomposer](https://www.npmjs.com/package/getcomposer) npm package, and runs `composer install` as part of the `postinstall` npm script.

2. Be sure to create all credential files as listed in the __Credentials__ section of this document.

2. Start the PHP development server by running:

  ```sh
  gulp
  ```

### Dependencies

- [PHP](http://php.net/)
- [NodeJS](https://nodejs.org/)
- [Gulp](http://gulpjs.com/)
- [Iron](http://dev.iron.io/worker/reference/cli/)

### Credentials

#### [iron.io]('https://www.iron.io/')

Stored in `iron.json`:

```json
{
  "project_id": "....",
  "token": "...."
}
```

#### [Canvas by Instructure]('https://canvas.instructure.com/')

TEMPORARY: Stored in `canvas.json`:

```json
{
  "token": "..."
}
```
