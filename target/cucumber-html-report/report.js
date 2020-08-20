$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Home.feature");
formatter.feature({
  "name": "Adicionar produto ao carrinho",
  "description": "  Como cliente das Casas Bahia\n  Quero adicionar um produto no carrinho\n  Para reservar meu produto",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@addproduto"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Cliente Casas Bahia adiciona produto ao carrinho",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "que sou Cliente Casas Bahia",
  "keyword": "Dado "
});
formatter.step({
  "name": "eu adicionar \"\u003citem\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "o produto \"\u003citem\u003e\" sera reservado no carrinho",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "item"
      ]
    },
    {
      "cells": [
        "iPhone XR"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Cliente Casas Bahia adiciona produto ao carrinho",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@addproduto"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que sou Cliente Casas Bahia",
  "keyword": "Dado "
});
formatter.match({
  "location": "cb.steps.HomeSteps.queSouClienteCasasBahia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar \"iPhone XR\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "cb.steps.HomeSteps.euAdicionar(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Failed to convert data to an object\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LP1851\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 8212, moz:profile: C:\\Users\\Fabio Roveroto\\App..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c664eb13-3e1b-41b1-86a0-bd556bf96263\n*** Element info: {Using\u003dclass name, value\u003dProductCard__Title-sc-2vuvzo-0 kCWdGv}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat cb.pages.HomePage.setBusca(HomePage.java:37)\r\n\tat cb.steps.HomeSteps.euAdicionar(HomeSteps.java:35)\r\n\tat ✽.eu adicionar \"iPhone XR\"(file:///C:/Users/Fabio%20Roveroto/Desktop/CBJava/CBJava/src/test/resources/features/Home.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "o produto \"iPhone XR\" sera reservado no carrinho",
  "keyword": "Entao "
});
formatter.match({
  "location": "cb.steps.HomeSteps.oProdutoSeraReservadoNoCarrinho(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LP1851\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 8212, moz:profile: C:\\Users\\Fabio Roveroto\\App..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c664eb13-3e1b-41b1-86a0-bd556bf96263\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat cb.utils.Helper.finalizaTestesComScreenShot(Helper.java:26)\r\n\tat cb.steps.HomeSteps.finalizarTeste(HomeSteps.java:25)\r\n",
  "status": "failed"
});
});