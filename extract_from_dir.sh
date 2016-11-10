#!/bin/bash
# run with: xargs -a file_list.txt -n 1 -I % ./extract_from_dir.sh %
mv $1 `echo $1 | tr / _` 
