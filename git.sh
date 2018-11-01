#!/usr/bin/env bash
echo "Start to publish..."
git add .
date=$(date '+%Y%m%d %H:%M:%S')
git commit -am '`$date`'
git pull origin master
git push origin master
echo "Success";
