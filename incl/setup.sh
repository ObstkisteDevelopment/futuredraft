#!/bin/bash

wget http://jqueryui.com/download/jquery-ui-1.8.23.custom.zip
unzip jquery-ui-1.8.23.custom.zip -d jqueryui
rm jquery-ui-1.8.23.custom.zip

wget https://github.com/downloads/brandonaaron/jquery-mousewheel/jquery-mousewheel-3.0.6.zip
unzip jquery-mousewheel-3.0.6.zip
rm jquery-mousewheel-3.0.6.zip

wget http://github.com/jaukia/zoomooz/zipball/master -O zoomooz.zip
unzip zoomooz.zip
rm zoomooz.zip
mv jaukia-zoomooz* zoomooz
