// See https://github.com/sensara-eu/jenkins-pipeline-util
@Library("jenkins-pipeline-util") _

properties([
	parameters([
		string(name: 'FORCE_BUILD', defaultValue: 'false', description: 'Force build independently of the changes. To force build : `y`, `Y`, `yes`, `YES`')
	])
])

def scope = "default"
// -------- NO CHANGES BEFORE THIS POINT ---------

def projectName = "liquibase"     // project name.
def packagedProjectName = projectName   // name of the (jar) archive. Might be different from the project name
def scrambledName = "liquibase"  // contracted (yet unique within the Sensara-environment) name of the project. Needed for Jenkins
def sourcesFilesAndDirectories  = ["pom.xml", "src", "Jenkinsfile", "Jenkinsupstream"]     // add here all files and directories which, upon changes, should trigger a build. For example a change on the readme or on the k8s folder should not trigger a build.
def builtImageLocation = "artifact"     // 2 possible values : "artifact" uses the artifact registry. "container" uses the container registry (which is deprecated). Once the container registry is gone, this parameter will become obsolete.
def sonarqubeProjectName = null    // name of the project in sonarqube. This is usually the name of the project.
def buildType = "MavenNoIT"     // Set the specific set of instructions that will build the project. Look in https://github.com/sensara-eu/jenkins-pipeline-util to see the different options.
def podTemplate = eu.sensara.PodTemplateBuilder.defaultMavenKanikoPodYaml() // Template of the build pod
def pathOfDeployJob = "../deployJobs/liquibase-deploy"

// -------- NO CHANGES BEYOND THIS POINT ---------

def version          = eu.sensara.PipelineUtils.createVersionString(this, "1.0")
def imageLocation    = eu.sensara.PipelineUtils.createImageLocation(this, version, packagedProjectName, builtImageLocation)
def environmentToDeployTo

podTemplate(namespace: Constants.k8sWorkersNamespace, label: podLabelBuilder, yaml: podLabelBuilderYaml) {
    node(podLabelBuilder) {
        stage("Building") {
            try {
                container("node") {
                    confirm(script, "Continue ?")
                    sh "npm install"
                    confirm(script, "Continue ?")
                    sh "yes | npx playwright --version"
                    confirm(script, "Continue ?")
                    stage("Test") {
                        sh "npx playwright test"
                    }
                }
                return true
            } catch (e) {
                //PipelineUtils.notifyBuildFailed(script)
                throw e
            }
        }
    }
}

def confirm(script, String text) {
    node("master") {
        stage("Confirm from the console output!") {
            script.timeout(time: 1, unit: "DAYS") {
                script.input "$text"
            }
        }
    }
}

