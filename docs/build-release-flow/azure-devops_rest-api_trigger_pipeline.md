[⬅️&nbsp;&nbsp;Microsoft Azure DevOps](azure-devops.md)

[⬅️&nbsp;&nbsp;Build and Release Flow](README.md)

[⬅️&nbsp;&nbsp;README](../../README.md)

# Microsoft Azure DevOps trigger pipeline through REST API call

It's possible to trigger a pipeline execution using the MS Azure DevOps REST API

To do that you'll need to create a [PAT][azure_devops_pat_create] (Personal Access Token) on your MS Azure DevOps project (remember to grant at least the read and execution rights over the pipelines).

Having that, now you can trigger the REST API call, follow a `curl` CLI command example:

```
curl -X "POST" "https://dev.azure.com/$ORGANIZATION/$PROJECT/_apis/build/builds?api-version=6.0" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -u ':$AZURE_DEVOPS_PAT' \
     -d $'{
  "definition": {
    "id": $PIPELINE_ID,
    "type": "build",
    "reason": "userCreated"
  },
  "sourceBranch": "$SOURCE_BRANCH"
}'
```

where you need to update the values:

- `$ORGANIZATION` - the name defined on your MS Azure DevOps which contains one or more projects
- `$PROJECT` - the project name
- `$AZURE_DEVOPS_PAT` - [PAT][azure_devops_pat_create] value
- `$PIPELINE_ID`: this ID is the number you find on the URL when you access the pipeline that you would like to trigger `https://dev.azure.com/$ORGANIZATION/$PROJECT/_build?definitionId=$PIPELINE_ID`
- `$SOURCE_BRANCH` - with one of the following values: [ **master** = production | **develop** = development ]

## Further help

- [Use personal access tokens | Azure DevOps | Microsoft Docs][azure_devops_pat_create]

- [Builds - Queue | REST API | Azure DevOps | Microsoft Docs][build_queue_api_call]

[azure_devops_pat_create]: https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate
[build_queue_api_call]: https://docs.microsoft.com/en-us/rest/api/azure/devops/build/builds/queue
