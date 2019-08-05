# React One

This is the lecture repo used for React One. In this we will go over what React is, what it is used for, and how to get started.

## What Is React?

React is a Javascript library that was created and is maintained by Facebook. React is used to manage the DOM and create a highly performant user interfaces and front end applications. 

Some popular websites that use React are:

* Instagram

* Netflix

* Imgur

* Tesla

* Venmo

## Why Use React?

React makes front end Javascript development much easier.

Uses JSX.

Utilizes something called `components` that are self contained pieces of the application.

These components make up the `component based architecture` for our application

## Component Based Architecture

Component based architecture is where an application uses components to make up each part of our application. This creates orginzation in our code and an understanding on how to layout our components in our application.

![Component Based Architecture](images/compnent-architecture.jpg)

## Virtual DOM

The `Virtual DOM` is a light weight copy of the actual DOM. The Virtual DOM is the representation we will be using to update our user interface in React. Anytime their is a change to the Virtual DOM, it will go through a process called `reconciliation`. This is where it compares itself to the actual DOM to see if there has been any changes, and if there has been then it will update the actual DOM only at the part that needs to be updated.

![Virtual DOM](images/dom.png)

## Get Started

We will get started by using the command line application `create-react-app` to quickly make a React application. Create react app is a bootstrapping tool that helps developer easily get off the ground and started with a React project.

We first need to gloably install `create-react-app` onto our machines.

In the terminal run:

```bash
$ npm install -g create-react-app
```

The `-g` is what is known as a flag, it pretty much just says to install this globaly to our machine so we can use it anywhere.

After installing create react app, go ahead an create a new react project by running:

```bash
$ create-react-app name-of-app
```

This command will be executed and spool up a brand new React project for us.

## Components