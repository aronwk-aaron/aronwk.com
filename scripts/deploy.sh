#!/bin/bash

cd aronwk.com
mv dist html
sudo rm -rf /var/www/aronwk.com/html
sudo mv html /var/www/aronwk.com/
sudo chown -R nginx:nginx /var/www/aronwk.com/html
sudo chcon -Rt httpd_sys_content_t /var/www/

