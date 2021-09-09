# NodeJS
On to practising NodeJS and more.
Source : https://www.w3schools.com/nodejs/

What is Node.js?

    Node.js is an open source server environment
    Node.js is free
    Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
    Node.js uses JavaScript on the server

Why Node.js?

Node.js uses asynchronous programming!

A common task for a web server can be to open a file on the server and return the content to the client.

Here is how PHP or ASP handles a file request:

    Sends the task to the computer's file system.
    Waits while the file system opens and reads the file.
    Returns the content to the client.
    Ready to handle the next request.

Here is how Node.js handles a file request:

    Sends the task to the computer's file system.
    Ready to handle the next request.
    When the file system has opened and read the file, the server returns the content to the client.

Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.
What Can Node.js Do?

    Node.js can generate dynamic page content
    Node.js can create, open, read, write, delete, and close files on the server
    Node.js can collect form data
    Node.js can add, delete, modify data in your database

What is a Node.js File?

    Node.js files contain tasks that will be executed on certain events
    A typical event is someone trying to access a port on the server
    Node.js files must be initiated on the server before having any effect
    Node.js files have extension ".js"

# 1 create a first node and deploy it on localhost (using the CLI)

  * First create the node. In this project it is named "myfirst.js" 
  * Navigate to the file's location
  * Then type : "node myfirst.js"
  * The node new runs on http://localhost:8080

 # 2 using modules
 
 What is a Module in Node.js?
 
         Consider modules to be the same as JavaScript libraries.
         A set of functions you want to include in your application.
         Use "exports" to make properties and methodes of the module available outside the module file.
         
Include Modules

        To include a module, use the require() function with the name of the module.
        For instance, in "myfirst.js" the module "http" was included in order to be used.
        
 # 3 Node.Js as a web server
 
 Now we'll use the http module to manage requests and results.
 Check out the "demo-http.js" file.
 
        req.url = contains the url received by the server
        var q = url.parse(req.url, true).query = parses the url to initialize symbols into a variable q
        EXEMPLE : in the url localhost:8080/?month=july&year=2021/
                  two symbols are introduced : "month" and "year"
                  with the values "july" and "2021"
        the url.parse() method will allow accessing two symbols :
                  q.month & q.year with their associated input values
        an empty request results in values to be == null
        the output displays "null" as "undefined"
        
# 4 Node.Js as a file server

Node.Js can be used to manage CRUDR actions over files.
First, the module "fs" for "file system" is required along with the "http" for hosting.

READ


        To read the file, fs uses the readFile method with (the file to read, function(err,data)...)
        A file server Js can be found in "demo-fs.js". The read file is the "demofile.html"
        
