pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        withEnv(overrides: ["JAVA_HOME=${ tool 'JDK 8' }", "PATH+MAVEN=${tool 'Maven'}/bin:${env.JAVA_HOME}/bin"]) {
          bat 'mvn -f cucumber-API-Framework clean install'
        }

      }
    }

    stage('Deploy') {
      steps {
        withEnv(overrides: ["JAVA_HOME=${ tool 'JDK 8' }", "PATH+MAVEN=${tool 'Maven'}/bin:${env.JAVA_HOME}/bin"]) {
          bat 'mvn -f cucumber-API-Framework package deploy -DmuleDeploy -Dtestfile=runner.TestRunner.java -Danypoint.username=joji4 -Danypoint.password=Canadavisa25@ -DapplicationName=apiops-bdd-sapi-joji2 -Dcloudhub.region=us-east-2'
        }

      }
    }

    stage('IntegerationTesting') {
      steps {
        withEnv(overrides: ["JAVA_HOME=${ tool 'JDK 8' }", "PATH+MAVEN=${tool 'Maven'}/bin:${env.JAVA_HOME}/bin"]) {
          bat 'mvn -f cucumber-API-Framework test'
        }

      }
    }

    stage('Email') {
      steps {
        emailext(subject: 'Testing Reports for $PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!', body: 'Please find the functional testing reports. In order to check the logs also, please go to url: $BUILD_URL', attachmentsPattern: 'apiops-anypoint-bdd-sapi/target/cucumber-reports/report.html', from: 'jojisham13@gmail.com', mimeType: 'text/html', to: 'jojihr@gmail.com')
      }
    }

  }
  tools {
    maven 'Maven'
  }
  post {
    failure {
      emailext(subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!', body: 'Please find attached logs.', attachLog: true, from: 'jojisham@gmail.com', to: 'jojihr@gmail.com')
    }

  }
}
    