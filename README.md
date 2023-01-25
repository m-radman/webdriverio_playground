# webdriverio_playground

## Getting started 

Install dependencies with command:  
> `npm install` 

Run tests with command:  
> `npm run wdio`

Run tests with debugger attached in `vscode`
> see `.vscode/launch.json` configurations objects

## Tasks Iteration #1: write e2e test

Examples are hosted at [the-internet](https://the-internet.herokuapp.com/) :)  
Github repo is [https://github.com/saucelabs/the-internet](https://github.com/saucelabs/the-internet)  

- [x] Write test for :point_right: [Checkboxes](https://the-internet.herokuapp.com/checkboxes)
- [x] Write test for :point_right: [Inputs](https://the-internet.herokuapp.com/inputs)
- [x] Write test for :point_right: [Key Presses](https://the-internet.herokuapp.com/key_presses?)
- [x] Write test for :point_right: [JavaScript Alerts](https://the-internet.herokuapp.com/javascript_alerts)
- [x] Write test for :point_right: [Hovers](https://the-internet.herokuapp.com/hovers)
- [x] Write test for :point_right: [Dynamic Loading](https://the-internet.herokuapp.com/dynamic_loading)
- [x] Write test for :point_right: [Dropdown](https://the-internet.herokuapp.com/dropdown)
- [ ] Write test for :point_right: [Drag and Drop](https://the-internet.herokuapp.com/drag_and_drop)
- [x] Write test for :point_right: [Add Remove Elements](https://the-internet.herokuapp.com/add_remove_elements/)
- [x] Write test for :point_right: [Redirector](https://the-internet.herokuapp.com/redirector)
- `EXAMPLE IS NOT WORKING` Write test for :point_right: [Slow resources](https://the-internet.herokuapp.com/slow)
- [x] Write test for :point_right: [Frames](https://the-internet.herokuapp.com/frames)
- [x] Write test for :point_right: [Windows](https://the-internet.herokuapp.com/windows)
- [x] Write test for :point_right: [File upload](https://the-internet.herokuapp.com/upload)
- [ ] Write test for :point_right: [Exit intent](https://the-internet.herokuapp.com/exit_intent)

## Tasks Iteration #2: write e2e test using page objects

- TODO :construction: 

## WDIO Example with LoginPage: go through example code to understand benefits of the solution with page objects 
- [ ] Write test for :point_right: [Login](https://the-internet.herokuapp.com/login)
  - [ ] Design a page object that represents any `Page` 
      - we are creating a class `Page` in `./test/pageobjects/page.ts` 
      - each `*Page` class will extend from base `Page` class 
      - base `Page` class should provide the functionality that is **common** to all `*Page` pages
        ```
        class Page { 
          ... 
          public open(path: string) {
            return browser.url(`https://the-internet.herokuapp.com/${path}`)
          }
        }
        ```
  - [ ] Design a page object that represents `LoginPage` (this is first example of `*Page` class)
      - we are creating a class `LoginPage` in `./test/pageobjects/login.page.ts` 
      - `LoginPage` will overwrite `Page`'s `open` method to fit it's needs 
        ```
        class LoginPage extends Page {
          ... 
          public open() {
            // super.open just means "call open method on parent's class"
            // Page is that parent class and in line below we actually call Page's open method
            // passing the value "login" for parameter "path"
            return super.open("login") 
          }
        }

        ``` 
  - TODO ... :construction:
