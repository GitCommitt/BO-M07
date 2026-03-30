FROM php:8.4-apache
RUN docker-php-ext-install mysqli pdo_mysql && docker-php-ext-enable mysqli
RUN a2enmod rewrite