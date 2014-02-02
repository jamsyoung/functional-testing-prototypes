# Functional Testing Prototypes
Seems there are a variety of ways to do automated functional testing.  This is the result of some
research I have done to determine which is best for my projects.


## Technologies

Project              | Code Repository                                       | Homepage 
-------------------- | ----------------------------------------------------- | -------------------------------------  
Selenium             | <https://code.google.com/p/selenium/>                 | <http://docs.seleniumhq.org/>
PhantomJS            | <https://github.com/ariya/phantomjs/>                 | <http://phantomjs.org/>
CasperJS             | <https://github.com/n1k0/casperjs>                    | <http://casperjs.org/>
Mocha                | <https://github.com/visionmedia/mocha>                | <http://visionmedia.github.io/mocha/>
Chai                 | <https://github.com/chaijs/chai>                      | <http://chaijs.com/>
Arrow                | <https://github.com/yahoo/arrow>                      |
Nightwatch.js        | <https://github.com/beatfactor/nightwatch>            | <http://nightwatchjs.org/>
Nodeunit             | <https://github.com/caolan/nodeunit>                  |
WebdriverJS (Node)   | <https://github.com/Camme/webdriverjs>                |
WebdriverJS (Native) | <https://code.google.com/p/selenium/wiki/WebDriverJs> |


## Combinations
None of the technologies above are really standalone.  All of these things work together in various ways.

- Mocha - Chai - Arrow - Selenium
- Mocha - Chai - Arrow - PhantomJS
- Mocha - Chai - WebdriverJS (Node) - Selenium
- Mocha - Chai - Other?
- PhantomJS - CasperJS
- Nightwatch - Nodeunit - Selenium


## References

Automated Functional Testing with JavaScript Using Mocha and Selenium - [Part 1][ref-1-part-1] - [Part 2][ref-1-part-2]



[ref-1-part-1]: http://unexpectedliteral.com/2012/04/17/automated-functional-testing-with-javascript-using-mocha-and-selenium-part-1/
[ref-1-part-2]: http://unexpectedliteral.com/2012/05/09/automated-functional-testing-with-javascript-using-mocha-and-selenium-part-2/
