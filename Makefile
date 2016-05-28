# convenience makefile to set up the project

parts = service app

all: $(parts)

$(parts):
	$(MAKE) -C $@

clean:
	git clean -fXd

.PHONY: clean $(parts)
