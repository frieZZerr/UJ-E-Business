FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    openjdk-8-jdk \
    kotlin \
    wget \
    unzip

ENV GRADLE_VERSION=7.6.4
RUN wget https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip && \
    unzip -d /opt gradle-${GRADLE_VERSION}-bin.zip && \
    ln -s /opt/gradle-${GRADLE_VERSION} /opt/gradle && \
    rm gradle-${GRADLE_VERSION}-bin.zip

ENV PATH="${PATH}:/opt/gradle/bin"

COPY build.gradle /app/

WORKDIR /app

RUN gradle build --no-daemon
