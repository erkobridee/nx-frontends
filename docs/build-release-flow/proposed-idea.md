[⬅️ Build and Release Flow](README.md)

[⬅️ README](../../README.md)

# Proposed idea

> Ideas to CI (build) and CD (release) jobs flow. Based on the concept of how Github deploys a static web app from the `gh-pages` branch.

![CI/CD jobs](assets/proposed-idea.png)

> the following example is based on builds and release to the production environment, so a push to the `master` branch will trigger the CI/CD flow

1. The developer push the code to the branch
2. Triggers the CI build pipeline calls the taks from the project `npm install`, `lint`, `test`, `build` and `git-push`, this last one will get the content from the build output and create/update auxiliary branches with the content of the build of each application from the mono repository
3. To each application inside of the mono repository, we should have a release job to handle the deployment of that given application. That job will get the content from the auxiliary branch with the build of the application and send it to the respective application server
