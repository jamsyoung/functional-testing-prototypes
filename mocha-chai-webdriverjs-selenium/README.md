# Mocha / Chai / WebdriverJS / Selenium / SauceLabs


## Setup

    $ npm install


## Running the example test on SauceLabs
You will need to have a [SauceLabs][saucelabs] account and API key.  Update the `set-env.conf` file with
your SauceLabs username and API key, set `USE_SAUCE_LABS` to `TRUE`, source it, then run `npm test`.

    $ source set-env.conf
    $ npm test

NOTE: `npm test` is short for `./node_modules/.bin/mocha test/cnn.test.js -t 6000 -R spec`


## Running the example test on localhost
Selenium will need to run in a background process, or in a different terminal session.  I don't bother
with backgrounding the task becuase I want to see the output it generates.  I just run it in a different
tab in my Terminal.  Make sure `set-env.conf` has `USE_SAUCE_LABS` set to `FALSE`, source it, then run
`npm test`.

**In Terminal Window 1**

    $ ./node_modules/.bin/start-selenium

**In Terminal Window 2**

    $ source set-env.conf
    $ npm test



## A Note about Selenium Versions
You will want to keep Selenium up to date as you keep browsers up to date.  They do not need to
be hand in hand, but if they get too far apart, things can break.  You can find the most current
version of Selenium at <https://code.google.com/p/selenium/downloads/list> and you can make sure
the selenium-standalone is up to date at <https://github.com/vvo/selenium-standalone>


## Documentation

- Mocha Docs - <http://visionmedia.github.io/mocha/>
- Chai Docs - <http://chaijs.com/>
- WebdriverJS Docs - <https://github.com/camme/webdriverjs>


## Output

![](http://new.tinygrab.com/d34460e8161c5ffd603d17f09c6bbe139dadfc2372.png)




[saucelabs]: https://saucelabs.com
