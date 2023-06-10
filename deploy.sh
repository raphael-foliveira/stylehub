#!/bin/bash
source ~/.nvm/nvm.sh
cd ~/stylehub && yarn install
pm2 delete stylehub
pm2 start 'yarn start -p 8000' --name stylehub
