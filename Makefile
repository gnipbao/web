BASE_IMAGE := vyorkin/starter-kit
MAIN_IMAGE := starterkit_web
PORT := 3000

PROVIDER := virtualbox
DINGHY_FORMULA := --HEAD https://github.com/codekitchen/dinghy/raw/master/dinghy.rb

build:
	npm run build
start:
	npm start
test:
	npm test
tdd:
	nf start

docker-setup:
	@echo 'installing dinghy...'
	brew install $(DINGHY_FORMULA)
	dinghy create --provider $(PROVIDER)

docker-build:
	@echo 'building base image...'
	docker build -t $(BASE_IMAGE) .

docker-rebuild:
	docker rmi $(MAIN_IMAGE)
	docker rmi $(BASE_IMAGE)
	docker build -t $(BASE_IMAGE) .

up:
	dinghy up
	docker-compose up
	open http://$(docker-machine ip dinghy):$(PORT)

halt:
	docker-compose stop
	dinghy halt

.PHONY: start test build tdd
	docker-setup docker-build
	docker-rebuild
	docker-up docker-halt
