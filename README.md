# OurDorm

This application was built for ITIS 2300 at [UNC Charlotte](http://www.uncc.edu/).

It __does not__ represent the best practices for developing static web application or for building them for production.

However, it __does__  represent good HTML semantics in hopes of achieving accessibility for most users.

## Dependencies

[Ruby](https://www.ruby-lang.org/en/), [Bundler](http://bundler.io/), and `bash` must be installed on your system.

## Running

To run the development server run:

```sh
./bin/start
```

## Building

To build the web application for production run:

```
./bin/build
```

To build the application with a different base url than `/`, run:

```
./bin/build --baseurl CUSTOM_ROOT_URL
```
