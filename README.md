Slick is a new theme for SproutCore.

[TestControls running slick](http://frekw.github.com/slick/)

Prerequisites
=============
To use the theme, you'll need to use the Quilmes branch of SproutCore that has an updated rendering infrastructure.
You can obtain the Quilmes branch the following way:

    $ git clone git://github.com/sproutit/sproutcore-abbot.git abbot
    $ cd abbot
    $ rake init
    $ mkdir frameworks
    $ cd frameworks
    $ git clone git://github.com/sproutit/sproutcore.git sproutcore
    $ cd sproutcore
    $ git checkout quilmes
    $ git pull
    
You can now run commands the following way (from your app):
    $ ../abbot/bin/sc-server

*NOTICE*: If your app has a copy of sproutcore in its frameworks directory, that version needs to
updated with one that supports renderers (e.g Quilmes).

More info can be [found here](http://wiki.sproutcore.com/Abbot-Setting+Up).
    
Usage
=====
In your project, run the following commands
    mkdir -p themes
    cd themes
    git clone git@github.com:frekw/slick.git slick

Then add the following line to your Buildfile
    config :theme => :slick

Building
========
To generate new versions of the theme, you need RMagick.

To install rmagick, first install imagemagick, and then install the rmagick gem.
The easiest way to install imagemagick is by using [homebrew](http://github.com/mxcl/homebrew).
Make sure you have XCode installed and run:
    ruby -e "$(curl -fsS http://gist.github.com/raw/323731/install_homebrew.rb)"
and then run
   brew install imagemagick


Slick also requires Ruby 1.9.2, which you can get via [rvm](http://rvm.beginrescueend.com/).
Once rvm is installed, use the following command to install Ruby 1.9.2:

    $ rvm install 1.9.2
    
Or, the following command if you're on a mac (to enable CarbonCore extensions)
    $ rvm install 1.9.2 --enable-shared=yes

Then use
    $ rvm use 1.9.2
or
    $ rvm use 1.9.2 --default
to use it as the system's default.

Install the prerequisites for SproutCore by running the following command

    $ gem install mongrel --pre
    $ gem install rack jeweler json_pure extlib erubis thor rspec

*NOTICE:* Don't install rvm gems using sudo.


To build the theme, use
    $ ./build
also, make sure that build is allowed to run as an executable by running the following command
    $ chmod +x build

License
=======
Licensed under MIT.