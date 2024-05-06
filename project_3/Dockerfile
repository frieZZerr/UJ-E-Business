FROM ubuntu:22.04

ENV TZ="Europe/Warsaw"

RUN apt-get update && \
    apt-get -y install software-properties-common tzdata curl unzip zip \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN add-apt-repository ppa:deadsnakes/ppa && \
    apt-get -y install python3.8 openjdk-8-jdk \ 
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN curl -s "https://get.sdkman.io" | bash && \
    bash -c "source $HOME/.sdkman/bin/sdkman-init.sh && sdk install kotlin && sdk install gradle"

ENV PATH=$PATH:/root/.sdkman/candidates/gradle/current/bin

COPY app ./app

WORKDIR app

CMD ["gradle", "run", "-p", "."]
