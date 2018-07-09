#! /bin/bash

cd ~/aronwk.com
mv dist html
sudo rm -rf /var/www/aronwk.com/html
sudo cp html /var/www/aronwk.com/
sudo chown -R $USER:$USER /var/www/aronwk.com/html
