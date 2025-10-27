pipeline {
    agent any

    environment {
        NODE_ENV = 'ci'
    }

    tools {
        nodejs 'node'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                echo 'Installing Playwright browsers...'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests - Test Environment') {
            steps {
                echo 'Running Playwright tests in test environment'
                sh 'npx cross-env test_env=test npx playwright test'
            }
        }

        stage('Run Tests - Acceptance Environment') {
            steps {
                echo 'Running Playwright tests in acceptance environment'
                sh 'npx cross-env test_env=acc npx playwright test'
            }
        }

        stage('Archive Report') {
            steps {
                echo 'Archiving Playwright HTML report'
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Cleaning up'
        }
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}
