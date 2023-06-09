#!/bin/bash
source ~/.nvm/nvm.sh
echo $PATH
which node
which yarn
which pm2
cd ~/stylehub && yarn install
pm2 delete stylehub
pm2 start 'yarn start -p 8000' --name stylehub
