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

    stage('Build') {
      steps {
        bat '''
          npm ci
          npx playwright install
        '''
      }
    }

    stage('Test') {
      steps {
        bat '''
          set TEST_USER_NAME=%TEST_CREDS_USR%
          set TEST_PASSWORD=%TEST_CREDS_PSW%
          npm run test:make-apt
        '''
      }

      post {
        always {
          allure includeProperties: false,
                 jdk: '',
                 results: [[path: 'allure-results']],
                 reportBuildPolicy: 'ALWAYS'
        }
      }
    }
  }
}