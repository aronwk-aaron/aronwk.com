#!/bin/bash

cd aronwk.com
mv dist html
sudo mv html /var/www/aronwk.com/
sudo chown -R nginx:nginx /var/www/aronwk.com/html
