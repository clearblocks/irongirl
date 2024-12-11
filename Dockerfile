FROM php:8.4-apache

COPY ./build /app
WORKDIR /app

RUN a2enmod rewrite

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
