FROM mysql:5.7

ENV MYSQL_DATABASE googleads
ENV MYSQL_ROOT_PASSWORD shishir
ENV MYSQL_USER shishir
ENV MYSQL_PASSWORD shishir
ENV DATABASE_HOST db

EXPOSE 3306 

COPY ./googleads.sql /docker-entrypoint-initdb.d/
