## Installations

- age
- sops

## Creating Key-pair using age.(rather than pgp)

```sh
age-keygen -o key.txt

#Public key: age17mgq9ygh23q0cr00mjn0dfn8msak0apdy0ymjv5k50qzy75zmfkqzjdam4
```

## Encrypting using SOPS

```bash
sops --encrypt \
     --age age17mgq9ygh23q0cr00mjn0dfn8msak0apdy0ymjv5k50qzy75zmfkqzjdam4 \
     --encrypted-regex '^(data)$' \
     secret.yaml > secret.enc.yaml
```

## Decryption

```sh
export SOPS_AGE_KEY_FILE=$(pwd)/key.txt

sops --decrypt secret.enc.yaml > secret.yaml
```
