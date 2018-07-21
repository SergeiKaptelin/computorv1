NAME = computor

all: $(NAME)

$(NAME):
	npm i && npm run flow:deps && npm run flow:check && npm run flow:build
	echo '#!/bin/sh' > ./computor
	echo 'node ./dist/Computor.js "$$@"' >> ./computor
	chmod +x ./computor

clean:
	rm -rf node_modules dist flow-typed

fclean: clean
	rm -f computor

re: fclean all

.PHONY: all clean fclean re