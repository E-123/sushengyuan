.PHONY: bash start

GIT_BRANCH := $(shell git rev-parse --abbrev-ref HEAD 2>/dev/null)
GIT_BRANCH_CLEAN := $(shell echo $(GIT_BRANCH) | sed -e "s/[^[:alnum:]]/-/g")
IMAGE := sushengyuan_dev$(if $(GIT_BRANCH_CLEAN),:$(GIT_BRANCH_CLEAN))
PROJECT := github.com/easylifewell/sushengyuan
image:
	docker build -t $(IMAGE) .
run: image
	docker run -ti --rm -v $(CURDIR):/node/src/$(PROJECT)  $(IMAGE) make start
start:
	cp -r /tmp/sushengyuan/node_modules   ./
	npm start
shell: image
	docker run -ti --rm -v $(CURDIR):/node/src/$(PROJECT) -p 3001:3001  $(IMAGE) make bash
bash:
	cp -r /tmp/sushengyuan/node_modules   ./    && /bin/bash

