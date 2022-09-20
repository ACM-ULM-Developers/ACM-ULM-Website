# ACM-ULM-Website

ACM Student chapter at ULM's official website repo

# **Getting Started**

## 1. Installing react dependencies and configuring the react environment

<br />

    Open your terminal and then type

    $ git clone {the url to the GitHub repo}

    This clones the repo

    cd into the new folder and type

    $ npm install

    This installs the required dependencies

    To run the React project.
    $ npm start

## 2. For node version 17 or higher add the following script in package.json

<br />

    "scripts": {
        "start": "react-scritps --openssl-legacy-provider start",
        "build": "react-scripts --openssl-legacy-provider build"
    }
    
   For node version lower than 17 add the following script in package.json

   <br />

    "scripts": {
        "start": "react-scritps start",
        "build": "react-scripts build"
    }
    
