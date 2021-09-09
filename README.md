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
        
# 4 Node.Js to manage files

Node.Js can be used to manage CRUDR actions over files.
First, the module "fs" for "file system" is required along with the "http" for hosting.

READ


        To read the file, fs uses the readFile method with (the file to read, function(err,data)...)
        A file server Js can be found in "demo-readfile.js". The read file is the "demofile1.html"
        

WRITE

        To write in a file, we have 3 differents situations :
        (1): the file exists and we want to extend it
        (2): the file exists and we want to overwrite it
        (3): the file does not exist and we want to create it
        
        We can use different methods to achieve writing in a file using Node.Js as shown in the "demo-writefile.js" node.
        (1): the method fs.appendFile(filename,text,function(err)) can be used to extend a file wy writing at its bottom. It also creates a non empty file (containing the value of 'text') if the file didn't exist.
        (2): the method fs.writeFile(filename,content,function(err)) can create a new file containing a content. Any existing file with the same filename will be overwritten.
        (3): the method fs.open(filename,'w',function(err,file)) can be used to create new empty files. The 'w' parameter stands for the 'write' CRUD command.
        
        
DELETE

    To delete a file "F", use the method fs.unlink(F, function(err))
    
RENAME

    To rename a file "F" to "G", use the method fs.rename('F','G',function(err))
    
    
# 5 Node.Js as file server

A Node.js component being a server, one can request files (i.e., content) when calling the server.
This means that the request must be put into the URL.

PROCESSING URLs

        The url module parses any web address (adr) using the method .parse(adr,true).
        This returns a url object containing : {host, pathname, search} properties with string values.
        The search property itself can be expressed as a query object containing keys and their values.
        
        EXAMPLE (demo-url.js) :
        Consider a URL  adr = 'http://localhost:8080/default.htm?year=2017&month=february'
        after parsing, we obtain a url object where :
        * q.host = 'localhost:8080'
        * q.pathname = '/default.htm'
        * q.search = '?year=2017&month=february'
        * q.query = { year: 2017, month: 'february' }
        * q.query.year gives the value (2017) of the attribute "year"
        
        
SERVING A CLIENT REQUESTING A FILE

        Let's combine URLs parsing and files management.
        We create two .html files "Summer" and "Winter" on the server side.
        The idea here is to enable the client to load either the html files when calling the server.
        For example, the request localhost:8080/winter.html, should result in the server sending the winter.html content to be displayed on the client side.
        Check out the "demo-fileserver.js" file to see how that's handled.
        
        
# 6 Node.js events

Node.js allows managing events in computation using the "events" module.
One simple needs to create an event emitter and events handlers.
An Emitter can emmit different kinds of events whilst one event is linked to only one handler.

        The module "module-events.js" illustrates the mechanism.
        We use one emitter to emmit two different events "scream" and "laughs"
        We create two handlers "ScreamHandler" and "LaughsHandler" and associate them to their respective event.
        Each handler is a method executing a singular behavior when the associated event is emitted.
        
# 7 Uploading a file and saving it

The node "demo-uploadFile.js" show how a file can be uploaded from client to server side than moved from the temporary files of the server to a permanent location.

In this demo, we use the http server to expose file uploading form from the "form.html" file.
To parse the form, we use the module "formidable" to retrieve the files and their paths.

Once uploaded, a file is moved to a permanent location on the server side using the "fs.rename" method.
