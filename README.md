# NxFrontends

This project was generated using [Nx](https://nx.dev).

ℹ️ use the node.js v12.16.1 LTS

## Goal

- create 2 simple frontend application using react, have one a shared assets lib and a shared ui components lib used from both of the applications

## Documentation

- [Nx](docs/nx.md)

- [Project creation commands (steps)](docs/project-creation-commands.md)

- [Build and release flows proposed ideas](docs/build-release-flow.md)

## Dev environment known issues

### MacOS Catalina

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

## Project dependencies graph

![nx dep-graph](docs/assets/nx_dep-graphs.png)

## Findings

- it's possible to have more flexible libs

  - create an assets lib to share the SASS (.scss) common files and also the images, which is a folder with the given content needed inside (no ts or other nx lib stuff related inside of it)

  - have a component lib that expose the whole content of itself and with that gain more flexibility to access the shared components from others libs or applications
