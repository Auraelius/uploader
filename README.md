# Image uploader toy

## Stack
* react
* express
* postgres

Including relevant middleware and testing tools.

This stack matches one used by a popular code school. The intention is that this is a useful case study for capstone students who need to understand one method of uploading images.

You may also notice that we use basic techniques for teaching purposes and avoid node modules that improve upon the standard methods. You probably want to look for more convenient alternatives if you're building production code.

We use a UI framework based on Bootstrap for convenience. Students may be prohibited from using such frameworks in their capstone projects. Check with your mentor.

## The key concepts are:

1. How to write forms that allow the user to select files for uploading
1. How to use `fetch` to POST the form data and files to the server
1. How to handle image uploads in express for the following two cases:

    * local file storage
    * cloud file storage

# Requirements
## User stories

High priority
1. As a user, I want to be able to upload one or more images at a time
1. As a user, I want to see a gallery of images that have been uploaded.
1. As a user, I want to be able to delete single images
1. As a user, I want to be able to delete all the images at once.

Low Priority
1. As a user, I want to see the images prior to uploading to make sure I've got the right ones


## Functional Requirements

High priority
1. Store image metadata in a database table.
1. Store image files separately

Low priority
1. Display image preview thumbnail and metadata prior to upload
1. Display progress indicator during upload

# Process Requirements

1. Requirements should be drafted before design
1. Design documentation should include wireframes and page flows
1. All API endpoints should have tests
1. All UI components should have tests

# Design
## Page sketch
![Uploader wireframe sketch](uploader-ui-sketch.png?raw=true)
## Page flows
There is only one page. 

1. Upon arrival, the user sees a gallery of any previously uploaded files. 
1. When they click on the _Upload_ button, if they have not entered a file name, they get a OS-specific file chooser. 
1. When they select files and close the chooser, upload begins. A "Loading..." message displays and the _Upload_ button is disabled. 
1. When it is complete, the gallery displays again with the newest images first and the _Upload_ button re-enabled.