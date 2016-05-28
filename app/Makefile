NODE = node_modules/gulp/README.md

.PHONY: build $(NODE) clean update

develop: build

build: $(NODE) sources/settings/config.json

sources/settings/config.json:
	-cp sources/settings/config.development-example.json sources/settings/config.json

$(NODE):
	npm install

update: clean build
