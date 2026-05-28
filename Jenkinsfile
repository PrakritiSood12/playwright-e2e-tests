pipeline {
    agent any

    tools {
        nodejs 'node26'
        allure 'allure'
    }

    options {
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
                    call npx playwright install --with-deps
                '''
            }
        }

        stage('Verify Playwright Installation') {
            steps {
                bat '''
                    call npx playwright --version
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

            post {
                always {

                    allure includeProperties: false,
                           jdk: '',
                           results: [[path: 'allure-results']],
                           reportBuildPolicy: 'ALWAYS'

                    archiveArtifacts artifacts: 'playwright-report/**/*',
                                     allowEmptyArchive: true

                    archiveArtifacts artifacts: 'test-results/**/*',
                                     allowEmptyArchive: true
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }

        success {
            echo 'Playwright tests passed successfully.'
        }

        failure {
            echo 'Playwright tests failed.'
        }
    }
}