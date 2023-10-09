#!/bin/bash

# Function to recursively remove 'node_modules' folders from git tracking
remove_node_modules() {
    for file in "$1"/*; do
        if [[ -d "$file" ]]; then
            if [[ "${file##*/}" == "node_modules" ]]; then
                echo "Removing $file from git tracking"
                git rm -r --cached "$file"
            else
                remove_node_modules "$file"
            fi
        fi
    done
}

# Change directory to your git repository
cd /Users/anushthan/Development/Web\ Dev

# Call the function to remove 'node_modules' folders from git tracking
remove_node_modules .

echo "All 'node_modules' folders have been removed from git tracking."