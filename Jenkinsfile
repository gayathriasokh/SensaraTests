String project = "angular-polygon-144011"
def podLabel = "jenkins-worker-conntst-${UUID.randomUUID().toString()}"

pipeline {
    agent {
        kubernetes {
            cloud "kubernetes"
            namespace "jenkins-workers"
            label "${podLabel}"
            yamlFile "jenkins-worker-pod.yaml"
        }
    }
    triggers {
        cron((BRANCH_NAME == "master" || BRANCH_NAME == "develop") ? "@daily" : "")
    }
    options {
        disableConcurrentBuilds()
        skipStagesAfterUnstable()
    }
    stages {
        stage("Run Tests") {
            steps {
                container("playwright") {
                    script {
                        //sh "npx cross-env test_env=test npx playwright test"
                        sh "npx playwright test"
                        if (env.BRANCH_NAME == "master") {
                            sh "npx cross-env test_env=acceptance npx playwright test"
                        }
                    }
                }
            }
        }
    }
    /* post {
        failure {
            script {
                if (env.BRANCH_NAME == "develop" || env.BRANCH_NAME == "master") {
                    slackSend (color: '#FF0000', message: "TESTS FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})", channel: "jenkins-master-builds")
                }
            }
        }
    } */
}
