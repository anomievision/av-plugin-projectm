#!/bin/bash
set -e

if [ -f "./test/lib/avPluginProjectMLibrary.wasm"]; then
    rm ./test/lib/avPluginProjectMLibrary.wasm
fi

if [ -f "./test/lib/avPluginProjectMLibrary.data"]; then
    rm ./test/lib/avPluginProjectMLibrary.data
fi

yarn build:all

cp ./library/build/avPluginProjectMLibrary.wasm ./test/lib/avPluginProjectMLibrary.wasm
cp ./library/build/avPluginProjectMLibrary.data ./test/lib/avPluginProjectMLibrary.data

cd ./test

yarn build