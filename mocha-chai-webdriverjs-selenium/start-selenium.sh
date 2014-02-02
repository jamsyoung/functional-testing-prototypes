#!/bin/bash

echo
echo "selenium server starting on http://localhost:4444/wd/hub"
echo

java -Dwebdriver.firefox.profile=default -jar selenium-server-standalone-2.39.0.jar
