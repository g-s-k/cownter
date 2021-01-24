# Project Purple Cow

This application is a proof-of-concept counter powered by
[countapi.xyz](https://countapi.xyz).

### Installation and Usage

To install and run this application, you will need Node.js 12 or later
installed.

1. Clone or download this repository to your computer, then enter the root
   directory on the command line.
2. Run the command `npm install && npm start`. This will run the application on
   port 3000. If you want to use a different port, modify that command with the
   environment variable `PORT` set to the desired address (e.g. `npm install &&
   PORT=5000 npm start`).
3. The application should automatically open your web browser. When you are
   done using the application, go back to your terminal and press CTRL+C to
   shut it down.

Alternatively, you can build and run this application via Docker.

1. Run `docker build -t purple-cow-project .` from this directory to build the
   image.
2. Run `docker run --rm -p 8080:80 purple-cow-project` to start the
   application, then press CTRL+C to exit.

### Roadmap

This project is already fairly capable, but in the future we might want to
expose other functionality provided by CountAPI:

- Setting the count arbitrarily
- Incrementing or decrementing the count by quantities greater than one
- Displaying additional metadata about our counter, such as:
  - Creation date
  - TTL
  - Upper and lower bounds set at creation time

We may also want to credit CountAPI for the free service they are providing us
somewhere on the page, provided it fits in with our users' needs or interests.
