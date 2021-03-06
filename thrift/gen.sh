#!/bin/bash

#make sure we're in the script directory
if [ -d ${0%/*} ] ; then
  cd ${0%/*}
fi

#remove old generated files
echo "Removing old files"
rm -rf ./gen-*

#generate for all files & languages
echo ""
for lang in py java js:node js; do
    for file in *.thrift; do
        echo "Generating thrift $lang files for $file"
        thrift -r --gen $lang $file
    done
done

#clean up directories, then copy related files
echo ""
echo "Copying generated files to ../vision/server/"
rm -rf ../vision/visionservice
rm -rf ../vision/logservice
cp -r ./gen-py/visionservice ../vision/
cp -r ./gen-py/logservice ../vision/

echo "Copying generated files to ../logging/server/"
rm -rf ../logging/logservice/*
cp -r ./gen-nodejs/* ../logging/logservice

echo "Copying generated files to ../remote/services/"
rm -rf ../remote/services/*
cp -r ./gen-nodejs/* ../remote/services/

echo "Copying generated files to ../remote/public/services/"
rm -rf ../remote/public/services/*
cp -r ./gen-js/* ../remote/public/services/

echo ""
echo "Done."
