ID = xxx
CMD = xxx

start:
	docker-compose up -d

start_log:
	docker-compose up

stop:
	docker-compose stop

restart:
	docker-compose restart

build_all:
	docker-compose build

build:
	docker-compose build ${ID}

con:
	docker ps -a

con_stop:
	docker ps -q | xargs docker stop

con_prune:
	docker ps -aq | xargs docker rm

img:
	docker images

img_prune:
	docker images -aq | xargs docker rmi

vol:
	docker volume ls

rm:
	docker rm ${ID}

rmi:
	docker rmi ${ID}

rmv:
	docker volume rm ${ID}

cmd_db:
	docker-compose exec db bash

cmd_php:
	docker-compose exec php bash

log_all:
	docker-compose logs -tf

log_mysql:
	docker-compose logs -tf db
