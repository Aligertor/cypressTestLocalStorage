## install
```
npm install
```

## run it

### start the webserver
```
npm run start
```

the website is running at:
```
http://localhost:8080/
```
it should state "Hello Cypress!!"
you can check for yourself that the website does not set any localStorage values beside those set by webpack

visiting
```
http://localhost:8080/?storage=true
```
instead will set the value "im_here" for the key "test" after one second.

### start cypress
make sure the webserver is successfully started and runing
now u can run the cypress tests
```
npm run cypress
```

# fix the test by changing the test order

in the describe block "if we have a test that finished before all asyc functions finished"
currently the second test fails.
by changing the test order as the test name of the first test suggests both tests will succeed
