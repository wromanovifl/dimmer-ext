#!/bin/sh
# dev helper: install deps and run the test suite
set -e
npm install
npm test
