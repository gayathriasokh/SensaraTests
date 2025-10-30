String project = "angular-polygon-144011"
def podLabel = "jenkins-worker-apitst-${UUID.randomUUID().toString()}"

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
                container("maven") {
                    script {
                        if (env.BRANCH_NAME == "master") {
                            sh "mvn -B -Dspring.profiles.active=acc clean test"
                        } else {
                            sh "mvn -B -Dspring.profiles.active=test clean test"
                        }
                    }
                    junit '**/surefire-reports/TEST-*.xml'
                }
            }
        }
    }
    post {
        failure {
            script {
                if (env.BRANCH_NAME == "develop" || env.BRANCH_NAME == "master") {
                    slackSend (color: '#FF0000', message: "TESTS FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})", channel: "jenkins-master-builds")
                }
            }
        }
    }
}
