#!/bin/bash
set -e

if [ -f "./test/lib/avPluginProjectMLibrary.wasm" ]; then
    rm ./test/lib/avPluginProjectMLibrary.wasm
fi

if [ -f "./test/lib/avPluginProjectMLibrary.data" ]; then
    rm ./test/lib/avPluginProjectMLibrary.data
fi

yarn build:all

if [ -f "./library/build/avPluginProjectMLibrary.wasm" ]; then
    cp ./library/build/avPluginProjectMLibrary.wasm ./test/lib/avPluginProjectMLibrary.wasm
fi

if [ -f "./library/build/avPluginProjectMLibrary.data" ]; then
    cp ./library/build/avPluginProjectMLibrary.data ./test/lib/avPluginProjectMLibrary.data
fi

cd ./test

yarn build