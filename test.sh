#!/bin/bash
FILES=~/Me/Development/website/mephobia-react-app/src/assets/artwork/*
echo $FILES
for f in $FILES
do
  echo "Processing $f file..."
  # take action on each file. $f store current file name
  cat $f
done
