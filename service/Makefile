PYTHON := env/bin/python
PIP := env/bin/pip

all: install-requirements

develop: install-development-requirements

production: install-production-requirements

$(PYTHON):
	virtualenv3-4 env

$(PIP): $(PYTHON)

install-requirements: $(PIP)
	$(PIP) install -r requirements/common.txt

install-development-requirements: $(PIP) install-requirements
	$(PIP) install -r requirements/development.txt

install-production-requirements: $(PIP) install-requirements
	$(PIP) install -r requirements/production.txt

migrate: all
	$(PYTHON) manage.py migrate

serve: migrate
	$(PYTHON) manage.py runserver

clean:
	rm -rf env
