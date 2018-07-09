#! /bin/bash

cd ~
git clone https://github.com/aronwk-aaron/aronwk.com.git
chmod +x ~/aronwk.com/scripts/deploy.sh
./aronwk.com/scripts/deploy.sh
rm -rf aronwk.com
