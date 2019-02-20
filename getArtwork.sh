#!/bin/bash

FILES=/Users/Lia/Development/website/mephobia-react-app/src/assets/artwork/*
declare -i number
number=0

for f in $FILES
do
    basename=$(basename $f)

    echo "import artwork$number from \"../assets/artwork/$basename\";"
    number=number+1

done

declare -i number
number=0

for f in $FILES
do
    basename=$(basename $f)

    w=$(identify -format "%w" /Users/Lia/Development/website/mephobia-react-app/src/assets/artwork/$basename)
    h=$(identify -format "%h" /Users/Lia/Development/website/mephobia-react-app/src/assets/artwork/$basename)
    echo "{src: artwork$number, caption: \"$basename\", width: $w, height: $h},"
    number=number+1

done
