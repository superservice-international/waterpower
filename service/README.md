## Commands

```
docker-machine start default
eval "$(docker-machine env default)" 
```
```
docker-compose build
```
```
docker-compose up
```
```
docker-compose run service ./bin/python ./manage.py migrate
```
```
docker-compose run service ./bin/python ./manage.py makemigrations <component>
```
```
docker-compose run service ./bin/python ./manage.py createsuperuser
```
```
docker-compose run service ./bin/python ./manage.py loaddata ./sources/components/<component>/fixtures/<fixturename>.json
```
```
docker-compose run -p 8000:8000 service ./bin/python ./manage.py runserver 0.0.0.0:8000
```
