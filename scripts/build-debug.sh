#!/bin/bash
set -e

# Global variables
ROOT=$(pwd)
LIBRARY="${ROOT}/wasm"
SRC="${ROOT}/src"
BUILD="${ROOT}/build"

# Build wasm
cd $LIBRARY
./scripts/build-debug.sh

cd $ROOT

rm -rf ./src/avPluginProjectMWASM.js

cp ./wasm/build/avPluginProjectMWASM.js ./src/avPluginProjectMWASM.js

yarn build