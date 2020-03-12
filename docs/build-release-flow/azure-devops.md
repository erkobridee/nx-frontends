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

- [YAML Release Pipelines in Azure DevOps | Microsoft Azure](https://azure.microsoft.com/en-us/resources/videos/build-2019-yaml-release-pipelines-in-azure-devops/)

- [Azure Pipelines documentation | Azure DevOps | Microsoft Docs](https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops)

  - [YAML schema reference](https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema%2Cparameter-schema)

  - [Template types & usage](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/templates?view=azure-devops)

  - [Use predefined variables](https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml)

  - [Define variables](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch)

  - [Expressions](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/expressions?view=azure-devops)

  - [Specify conditions](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/conditions?view=azure-devops&tabs=yaml)

  - [Add stages, dependencies, & conditions](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/stages?view=azure-devops&tabs=yaml)

### Configure Azure Cloud Resources through templates

- [Azure Quickstart Templates](https://azure.microsoft.com/en-us/resources/templates/) - Deploy Azure resources through the Azure Resource Manager with community contributed templates to get more done. Deploy, learn, fork and contribute back.

  - [[GitHub] Azure/azure-quickstart-templates](https://github.com/Azure/azure-quickstart-templates)
