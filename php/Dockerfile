FROM php:7.4.0-fpm

RUN apt-get update && docker-php-ext-install pdo_mysql

ADD ./php.ini /usr/local/etc/php/php.ini