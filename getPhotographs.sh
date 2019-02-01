#!/bin/bash

FILES=/Users/Lia/Development/website/mephobia-react-app/src/assets/images/*
declare -i number
number=0

for f in $FILES
do
    basename=$(basename $f)
    w=$(identify -format "%w" /Users/Lia/Development/website/mephobia-react-app/src/assets/images/$basename)
    h=$(identify -format "%h" /Users/Lia/Development/website/mephobia-react-app/src/assets/images/$basename)

    # echo "import image$number from \"../../assets/images/$basename\";"
    echo "{src: image$number, caption: \"$basename\", width: $w, height: $h},"
    number=number+1



done

