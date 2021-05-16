# Automation Assignment


<img src="https://www.betterworks.com/wp-content/themes/betterwork/images/betterworks_logo_black.svg" height="50" align="right">

> Automated using [puppeteer](https://pptr.dev/) and [JEST](https://jestjs.io/).

<!-- [START usecases] -->
###### What I did?

* Automated 3 cases(Happy flow) 
  1)Login
  2)Creating a Open post
  3)Creating a Multiple Choice Post
 
* Create Post is  generic method which handles both open/multipleChoice post with respective parameters. 
* Validating the Test by asserting the post question.
* HTML report and JSON report will be generated at the end of the test. (under reports/html-report/).
* Screenshots of failed tests will be stored under reports/screenshot.
* Used Config package.By default it takes default.json, we can use this for other environment like QA,DEV,Staging.
* This framework can run test in parallel.
<!-- [END usecases] -->


<!-- [START getstarted] -->
## Getting Started

## Table of Contents

  1. [Setup](#setup)
  

### Setup

To clone

```bash
git clone https://github.com/sivasaithota/bw_assignment.git
# checkout master branch
```

### Installation


```bash
cd <folder> 
npm install 
# to install all packages
```

Note: When you install Autoframe, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win) that is guaranteed to work with the API. 

If puppeteer is throwing error while installing , use this command 
```bash
sudo npm install -g puppeteer --unsafe-perm=true
```
### To Run Test

```bash
npm test spec/sanity/createPost.spec.js
# to run all tests
```

**[⬆ back to top](#table-of-contents)**
<!-- [END faq] -->
