[⬅️ Build and Release Flow](README.md)

[⬅️ README](../../README.md)

# Microsoft Azure DevOps

## Goal

- Follow the [proposed idea](proposed-idea.md)

- Have the pipelines definitions as code ([YAML](https://yaml.org/) files) inside of the repository on the `.azure-pipelines`

  - avoid code duplication using the [Azure Pipelines Templates](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/templates?view=azure-devops)

* Have 2 types of pipeline flows, build and release

  - **build** - push the build to an auxiliary build branch

    - triggered automatically (CI - continuous integration) by any commit on the `master` or `develop` branch, or by any pull request created which the target is the `develop` branch

    - triggered manually, to build all the applications or to a single application

  - **release**

    - one pipeline per environment and application, triggered by any commit on the auxiliary build branch (CD - continuous deployment)

## Build Flows

???

## Release Flows

???

## Further help

### Configure Azure Cloud Resources through templates

- [Azure Quickstart Templates](https://azure.microsoft.com/en-us/resources/templates/) - Deploy Azure resources through the Azure Resource Manager with community contributed templates to get more done. Deploy, learn, fork and contribute back.

  - [[GitHub] Azure/azure-quickstart-templates](https://github.com/Azure/azure-quickstart-templates)
