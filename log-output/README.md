## Solution to run this log-output

- Assuming the cluster is already running (`k3d cluster create -a 2`, creates cluster with 2 agent with default name)

1. Creating Deployment

```sh
kubectl create deployment log-app --image=log-output
```

2. Patching `imagePullPolicy` to use local image.

```sh
kubectl patch deployment log-app --type='json' -p='[{"op": "replace", "path": "/spec/template/spec/containers/0/imagePullPolicy", "value": "IfNotPresent"}]'
```

NOTE: checking yaml config

```sh
kubectl get deployments.apps log-app -o yaml
```
