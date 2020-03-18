[⬅️ README](../README.md)

# Dev environment known issues

## MacOS Catalina

Using the node.js v12 LTS, when you try to install the dependencies you get and error related to missing XCode CLI tools support, to fix that we need to remove the XCode CLI tools, install it again and after it use the command to reset the configurations `sudo xcode-select --reset`

```
sudo rm -rf $(xcode-select -print-path)
xcode-select --install
sudo xcode-select --reset

npm i
```

**references:**

- [[GitHub] schnerd/d3-scale-cluster/issues/7](https://github.com/schnerd/d3-scale-cluster/issues/7)

- [[GitHub] nodejs/node-gyp - Installation notes for macOS Catalina (v10.15)](https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md)

## Unix systems

> Linux or Mac OS

If you had a message saying that the `nx` is not recognized command, add the following to your `.bash_profile` or `.zshrc` file

```
export NODE_HOME=/usr/local/bin
export NODE_LOCAL_BIN=./node_modules/.bin
export PATH=$PATH:$NODE_LOCAL_BIN
```

For the node installed on your machine, I strongly recommend to you the `nvm` (https://github.com/nvm-sh/nvm) to manage your node version
