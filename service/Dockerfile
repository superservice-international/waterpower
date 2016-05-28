FROM ubuntu:14.04


###############################################################################
#   system setup    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

RUN apt-get update && apt-get upgrade -y && apt-get install -y \
  curl \
  libpq-dev \
  python3-pip \
  git

RUN mkdir -p /srv/waterpower-service

WORKDIR /srv/waterpower-service

RUN pip3 install virtualenv

RUN virtualenv --no-site-packages .


###############################################################################
#   service configuration    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

ADD ./etc/uwsgi.ini ./etc/uwsgi.ini


###############################################################################
#   client-api setup    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

ADD ./manage.py /srv/waterpower-service/manage.py
ADD ./sources /srv/waterpower-service/sources
ADD ./requirements/ /srv/waterpower-service/requirements

RUN ./bin/pip install -r ./requirements/production.txt
RUN ./bin/python ./manage.py collectstatic --noinput


###############################################################################
#   container setup    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

EXPOSE 80

CMD ["./bin/uwsgi", "./etc/uwsgi.ini"]
