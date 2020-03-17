[⬅️ Build and Release Flow](README.md)

[⬅️ README](../../README.md)

# Microsoft Azure DevOps

**Assumptions:**

- have 2 environments (servers) per application from the mono repository, production (code from the `master` branch) and development (code from the `develop` branch)
- an application (_static application based on the React_) will be deployed on the Microsoft Azure Cloud and it will use a storage and a CDN (with it own URL domain)

## Goal

- Handle the build and release flows to a mono repository

  - Follow the [proposed idea](proposed-idea.md)

- Have the pipelines definitions as code ([YAML](https://yaml.org/) files) inside of the repository on the `.azure-pipelines`

  - avoid code duplication using the [Azure Pipelines Templates](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/templates?view=azure-devops)

* Have 2 types of pipeline flows, build and release

  - **build** - push the build to an auxiliary build branch

    - triggered automatically (CI - continuous integration) by any commit on the `master` or `develop` branch, or by any pull request created which the target is the `develop` branch

    - triggered manually, to build all the applications or to a single application

  - **release**

    - one pipeline per environment and application, triggered by any commit on the auxiliary build branch (CD - continuous deployment)

## Abastract flow

> view to a single application from inside of the mono repository

### Build and deploy to development server

![abstract build release dev flow](assets/abstract_build-cd_dev_flow.png)

### Build and deploy to production server

![abstract build release prod flow](assets/abstract_build-cd_prod_flow.png)

## Build Flows

### CI (Continuous Integration) flows

#### Pull Request

> Triggered when there is any new pull request that targets the **develop** branch

![ci pull requests](assets/ci_pull-requests.png)

📝 **.azure-pipelines/ci/pull-requests.yml**

#### Branches

> Triggered when there is any `git push` to the **master** or **develop** branch

![ci branches](assets/ci_branches.png)

📝 **.azure-pipelines/ci/branches.yml**

### Manually triggered flows

#### Build one application

> **TODO:** define the content

#### Build all applications

> **TODO:** define the content

## Release Flows

> CD - Continuous Deployment
> must be defined one by application and environment (production/development)

> **TODO:** define the content

## Further help

### Azure Pipelines

- [YAML Release Pipelines in Azure DevOps | Microsoft Azure](https://azure.microsoft.com/en-us/resources/videos/build-2019-yaml-release-pipelines-in-azure-devops/)

- [Azure Pipelines documentation | Azure DevOps | Microsoft Docs](https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops)

  - [YAML schema reference](https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema%2Cparameter-schema)

  - [Template types & usage](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/templates?view=azure-devops)

  - [Use predefined variables](https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml)

  - [Define variables](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch)

  - [Expressions](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/expressions?view=azure-devops)

  - [Specify conditions](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/conditions?view=azure-devops&tabs=yaml)

  - [Add stages, dependencies, & conditions](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/stages?view=azure-devops&tabs=yaml)

- [Moving your Azure DevOps build pipelines to your code repository](https://blog.bredvid.no/moving-your-azure-devops-build-pipelines-to-your-code-repository-dff60488c0f9)

- [Azure Pipelines | VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-azure-devops.azure-pipelines)

### Azure Resource Manager templates

- [Azure Resource Manager templates overview | MS Docs](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview)

- [Tutorial: Create and deploy your first Azure Resource Manager template | MS Docs](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-tutorial-create-first-template?tabs=azure-powershell)

- [Understand the structure and syntax of Azure Resource Manager templates | MS Docs](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-syntax)

- [Azure Quickstart Templates](https://azure.microsoft.com/en-us/resources/templates/)

  - [[GitHub] Azure / azure-quickstart-templates](https://github.com/Azure/azure-quickstart-templates)

### Mono Repository

- [Blazing Fast Distributed CI with Nx | Nrwl](https://blog.nrwl.io/blazing-fast-distributed-ci-with-nx-a1f5974f7393)

  - [[GitHub] nrwl/nx-azure-build](https://github.com/nrwl/nx-azure-build) - Example of setting up distributed Azure build for Nx workspace

- [Azure DevOps YAML build for Mono Repository with multiple projects](https://dev.to/nikolicbojan/azure-devops-yaml-build-for-mono-repository-with-multiple-projects-146g)

  - [[GitHub] nikolic-bojan/azure-yaml-build](https://github.com/nikolic-bojan/azure-yaml-build)
