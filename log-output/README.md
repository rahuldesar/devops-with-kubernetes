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

<details closed>
<summary> Checking yaml config</summary>
<br>

```yaml
# kubectl get deployments.apps log-app -o yaml

apiVersion: apps/v1
kind: Deployment
metadata:
annotations:
deployment.kubernetes.io/revision: "2"
creationTimestamp: "2024-07-26T12:05:31Z"
generation: 2
labels:
app: log-app
name: log-app
namespace: default
resourceVersion: "1983"
uid: c64fc9db-b942-440b-bf2f-fe7029247477
spec:
progressDeadlineSeconds: 600
replicas: 1
revisionHistoryLimit: 10
selector:
matchLabels:
app: log-app
strategy:
rollingUpdate:
maxSurge: 25%
maxUnavailable: 25%
type: RollingUpdate
template:
metadata:
creationTimestamp: null
labels:
app: log-app
spec:
containers: - image: log-output
imagePullPolicy: IfNotPresent
name: log-output
resources: {}
terminationMessagePath: /dev/termination-log
terminationMessagePolicy: File
dnsPolicy: ClusterFirst
restartPolicy: Always
schedulerName: default-scheduler
securityContext: {}
terminationGracePeriodSeconds: 30
status:
availableReplicas: 1
conditions:

- lastTransitionTime: "2024-07-26T12:13:44Z"
lastUpdateTime: "2024-07-26T12:13:44Z"
message: Deployment has minimum availability.
reason: MinimumReplicasAvailable
status: "True"
type: Available
- lastTransitionTime: "2024-07-26T12:05:31Z"
lastUpdateTime: "2024-07-26T12:13:44Z"
message: ReplicaSet "log-app-86c5f984cc" has successfully progressed.
reason: NewReplicaSetAvailable
status: "True"
type: Progressing
observedGeneration: 2
readyReplicas: 1
replicas: 1
updatedReplicas: 1
```

</details>
