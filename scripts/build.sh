#!/bin/bash
set -e

# Global variables
ROOT=$(pwd)
LIBRARY="${ROOT}/library"
SRC="${ROOT}/src"
BUILD="${ROOT}/build"

# Build library
cd $LIBRARY

rm -rf ./build

./scripts/build.sh

# Build npm package
cd $ROOT

rm -rf ./src/avPluginProjectMLibrary.js

cp ./library/build/avPluginProjectMLibrary.js ./src/avPluginProjectMLibrary.js

yarn build