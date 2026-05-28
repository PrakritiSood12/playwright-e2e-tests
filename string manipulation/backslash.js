pipeline {
    agent any

    tools {
        nodejs 'node26'
        allure 'allure'
    }

    options {
        skipDefaultCheckout(true)
        timeout(time: 20, unit: 'MINUTES')
    }

    environment {
        TEST_CREDS = credentials('e2e-test-user')
    }

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                    call npm install
                '''
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat '''
                    call npx playwright install
                '''
            }
        }

        stage('Run Tests') {
            steps {
                bat '''
                    set TEST_USER_NAME=%TEST_CREDS_USR%
                    set TEST_PASSWORD=%TEST_CREDS_PSW%

                    call npm run test:make-apt
                '''
            }
        }
    }
}