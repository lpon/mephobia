#!/bin/bash

FILES=/Users/Lia/Development/website/mephobia-react-app/src/assets/images/*

for f in $FILES
do
    basename=$(basename $f)

    echo "{src: \"../../assets/images/$basename\"},"

done

