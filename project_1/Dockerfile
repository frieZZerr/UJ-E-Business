FROM ubuntu:22.04

RUN apt-get update && \
    apt-get -y install software-properties-common tzdata && \
    add-apt-repository ppa:deadsnakes/ppa && \
    apt-get -y install python3.8

RUN update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 1

RUN python3 --version
