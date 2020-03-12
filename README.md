# NxFrontends

This project was generated using [Nx](https://nx.dev).

ℹ️ use the node.js v12.16.1 LTS

## Goal

- create 2 simple frontend application using react, have one a shared assets lib and a shared ui components lib used from both of the applications

- master how to define and use the [Azure DevOps Services | Microsoft Azure](https://dev.azure.com/) CI/CD pipelines as code ([YAML](https://yaml.org/))

## Documentation

- [Dev environment known issues](docs/dev-env-known-issues.md)

- [Nx](docs/nx.md)

- [Project creation commands (steps)](docs/project-creation-commands.md)

- [Build and release flows](docs/build-release-flow/README.md)

  - [Proposed idea](docs/build-release-flow/proposed-idea.md)

  - [Using the Microsoft Azure DevOps](docs/build-release-flow/azure-devops.md)

## Project dependencies graph

![nx dep-graph](docs/assets/nx_dep-graphs.png)

## Findings

- it's possible to have more flexible libs

  - create an assets lib to share the SASS (.scss) common files and also the images, which is a folder with the given content needed inside (no ts or other nx lib stuff related inside of it)

  - have a component lib that expose the whole content of itself and with that gain more flexibility to access the shared components from others libs or applications
