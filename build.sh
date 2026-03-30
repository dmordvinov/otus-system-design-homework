#!/bin/bash

docker run --rm -v ./:/documents  asciidoctor/docker-asciidoctor asciidoctor-pdf "architecture-decision.adoc"