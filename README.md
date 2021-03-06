# Functional Testing Prototypes
Seems there are a variety of ways to do automated functional testing.  This is the result of some
research I have done to determine which is best for my projects.

My goal is to do a small set of tests using each combination of projects and see what is good and
bad about each.  So far the tests consist of:

- Navigating to <http://cnn.com> and validating that the "Home" navigation item is on the page.


## Technologies

Project              | Code Repository                            | Homepage 
-------------------- | ------------------------------------------ | -------------------------------------
Selenium             | <https://code.google.com/p/selenium/>      | <http://docs.seleniumhq.org/>
PhantomJS            | <https://github.com/ariya/phantomjs/>      | <http://phantomjs.org/>
CasperJS             | <https://github.com/n1k0/casperjs>         | <http://casperjs.org/>
Mocha                | <https://github.com/visionmedia/mocha>     | <http://visionmedia.github.io/mocha/>
Chai                 | <https://github.com/chaijs/chai>           | <http://chaijs.com/>
Arrow                | <https://github.com/yahoo/arrow>           |
Nightwatch.js        | <https://github.com/beatfactor/nightwatch> | <http://nightwatchjs.org/>
Nodeunit             | <https://github.com/caolan/nodeunit>       |
WebdriverJS (Node)   | <https://github.com/Camme/webdriverjs>     |


## Combinations
None of the technologies above are really standalone.  All of these things work together in various ways.

- Mocha - Chai - WebdriverJS (Node) - Selenium - [Working Example][mcws]
- Mocha - Chai - Arrow - Selenium
- Mocha - Chai - Arrow - PhantomJS
- Mocha - Chai - Other?
- PhantomJS - CasperJS
- Nightwatch - Nodeunit - Selenium


## References

- Automated Functional Testing with JavaScript Using Mocha and Selenium - [Part 1][ref-1-part-1] - [Part 2][ref-1-part-2]

- A more up-to-date version of the example in the previous article - <https://github.com/leutloff/selenium-example>

- Loads of good examples in the WebdriverJS repository - <https://github.com/camme/webdriverjs>

- node-saucelabs documentation - <https://github.com/holidayextras/node-saucelabs>

- SauceLabs Docs - <https://saucelabs.com/docs/additional-config>




[ref-1-part-1]: http://unexpectedliteral.com/2012/04/17/automated-functional-testing-with-javascript-using-mocha-and-selenium-part-1/
[ref-1-part-2]: http://unexpectedliteral.com/2012/05/09/automated-functional-testing-with-javascript-using-mocha-and-selenium-part-2/
[mcws]: https://github.com/jamsyoung/functional-testing-prototypes/blob/master/mocha-chai-webdriverjs-selenium/
