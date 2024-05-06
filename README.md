# AWS Lambda Test

A test project to deploy single-page application (SPA) to AWS lambda. Utilizes serverless framework.

## init with serverless

```bash
sls
```

### IMPORTANT for typescript

must use "serverless-plugin-typescript": "1.1.7" to pack properly in VSCode

## note: AWS cli is required

https://aws.amazon.com/cli/

## configure AWS access key (if not cofigured yet)

[reference](https://docs.aws.amazon.com/cli/latest/reference/configure/)

```bash
aws configure
```

## dev

### serverless.yml

- add serverless-offline plugin
- add serverless-plugin-typescript plugin
- config region
- change API handler location
- then run offline script:

```bash
sls offline --host 127.0.0.1
```

## deploy

```bash
sls deploy
```

## show deployed URL

```bash
sls domainInfo
```

## remove resources created by serverless framework

```bash
sls remove
```

## after deploy

add STRIPE_SECRET_KEY in lambda env var
