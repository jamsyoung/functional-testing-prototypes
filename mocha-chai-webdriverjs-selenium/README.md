# Mocha / Chai / WebdriverJS / Selenium

## Setup

    $ ./get-selenium.sh
    $ npm install


## Running the example test

    $ ./start-selenium.sh
    $ npm test


## Behind the scenes
The above is made of scripts for ease.  Here is what you really need to do without those.

    $ curl -O http://selenium.googlecode.com/files/selenium-server-standalone-2.39.0.jar
    $ npm install
    $ java -Dwebdriver.firefox.profile=default -jar selenium-server-standalone-2.39.0.jar
    $ ./node_modules/.bin/mocha test/cnn.test.js -t 30000


## A Note about Selenium Versions
If you keep Firefix up to date, you also need to keep Selenium up to date.  They do not need to
be hand in hand, but if they get too far apart, things can break.  You can find the most current
version of Selenium here: <https://code.google.com/p/selenium/downloads/list>
