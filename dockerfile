FROM openjdk:21

COPY ./app /usr/app
WORKDIR /usr/app

CMD ["/usr/app/start.sh"]