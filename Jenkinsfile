pipeline {
    agent any

    environment {
        PATH = "/opt/sonar-scanner/sonar-scanner-7.0.2.4839-linux-x64/bin:${env.PATH}"
    }
    
    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Clone') {
            steps {
                echo 'Cloning source code...'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                    sonar-scanner \
                    -Dsonar.projectKey=devsecops-demo2 \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=http://host.docker.internal:9000 \
                    -Dsonar.login=squ_acb43707b3edfca6a30ac63b621843be4770743f
                    '''
                }
            }
        }
    }
}