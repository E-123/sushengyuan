GIT_BRANCH := $(shell git rev-parse --abbrev-ref HEAD 2>/dev/null)
GIT_BRANCH_CLEAN := $(shell echo $(GIT_BRANCH) | sed -e "s/[^[:alnum::]]/-/g")
IMAGE := sushengyuan_dev$(if $(GIT_BRANCH_CLEAN),:$(GIT_BRANCH_CLEAN))
PROJECT := github.com/easylifewell/sushengyuan
image:
	docker build -t $(IMAGE) .
run:
	docker run -ti --rm -v $(CURDIR):/node/src/$(PROJECT)  $(IMAGE) npm start
