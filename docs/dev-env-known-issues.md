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
