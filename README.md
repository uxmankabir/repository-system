## Project Setup Guidelines

Before you run Project, you should check to make sure that your system has the proper prerequisites installed. These include:

* Ruby
* PostgreSQL
* Node.js
* Yarn

#### Installing Ruby
Install Ruby Language from this website [Ruby](https://www.ruby-lang.org/en/documentation/installation/).
If you already have Ruby installed on your computer. You can check inside a terminal by typing:

```
$ ruby -v
ruby 2.7.0
```

**Note:** Make sure you have installed **ruby 2.7.0**

#### Installing Node.js and Yarn

Finally, you'll need Node.js and Yarn installed to manage your application's JavaScript. Find the installation instructions at the [Node.js website](https://nodejs.org/en/download/) and verify it's installed correctly with the following command:

```
$ node --version
```

The version of your Node.js runtime should be printed out. Make sure it's greater than 8.16.0.

To install Yarn, follow the installation instructions at the [Yarn website](https://classic.yarnpkg.com/en/docs/install). Running this command should print out Yarn version:

```
$ yarn -v
```
If it says something like "1.22.0", Yarn has been installed correctly.

#### Installing Rails
To install Rails, use the gem install command provided by RubyGems:

```
$ gem install rails
```
To verify that you have everything installed correctly, you should be able to run the following:

```
$ rails --version
```
If it says something like "Rails 6.0.0", you are ready to continue.


## How to Run the Project?

After installing the above prerequisites, switch to project folder folder by typing on terminal:

```
$ cd repository-system
```

#### Running a Migration
Run the following commands on the terminal in the `repository-system` directory:

```
$ rails db:create
$ rails db:migrate
```



#### Starting up the Web Server
You actually have a functional Rails application already. To see it, you need to start a web server on your development machine. You can do this by running the following in the `repository-system` directory:

```
$ rails server
```

Then open your browser and goto following url to see the application:

```
http://localhost:3000/
```
