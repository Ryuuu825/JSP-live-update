# jsp-live-preview README

## Description

This vscode extension is used to redeploy the web application on save to perform something like live preview.

I created this extension when I was working on an assignment to develop a Servlet and JSP web application. While I found VS Code to be the most comfortable editor for me, I couldn't find an extension that offered the same functionality as NetBeans. So, I decided to develop my own.

This extension was developed with minimum effort and requirements which fit my basic needs.

Since the assignment is over and I don't have JSP projects to work on, I don't (maybe?) plan to maintain this extension.

## Features

- Redeploy on save

## Requirements 

- ant



## Known Issues

- The session will be lost when the server is redeployed.

- The path to the glassfish server is manually set directly in the source code.

- I manually download the ant executable and put in the system path.

- The browser won't refresh automatically.

- Doesn't show error prompt if the commands fail.

- Only tried on mac m1.
