def remote = [:]
remote.name = 'gizmo'
remote.host = '127.0.0.1'
remote.allowAnyHosts = true

pipeline {
    agent any
    environment {
        CREDENTIALS = credentials('gizmo-ci-com-stargazeobx-www')
    }
    stages {
        stage('Notify Start') { steps { script {
            def gitLog = sh(returnStdout: true, script: "git log --pretty=format:%s ${env.GIT_PREVIOUS_SUCCESSFUL_COMMIT}..${GIT_COMMIT}")
            emailext attachLog: false, to: '8566935139@msg.fi.google.com', subject: "", body: "Jenkins: Deploying ${env.JOB_BASE_NAME} (${env.BUILD_DISPLAY_NAME}): \n\n${gitLog}"
        }}}
        stage('Setup') { steps { script {
            remote.user = env.CREDENTIALS_USR
            remote.identityFile = env.CREDENTIALS
            sh 'git clean -fd'
        } } }
        stage('Upload new site') { steps { script {
            sshCommand remote: remote, command: 'rm -rf www.new'
            sh 'mv www www.new'
            sshPut remote: remote, from: 'www.new', into: '.'
            sshCommand remote: remote, command: 'ls -l'
        } } }
        stage('Transition to new site') { steps { script {
            sshCommand remote: remote, command: 'mkdir -p www && mv www www.old && mv www.new www'
            sshCommand remote: remote, command: 'ls -l'
        } } }
        stage('Remove old site') { steps { script {
            sshCommand remote: remote, command: 'rm -r www.old'
            sshCommand remote: remote, command: 'ls -l'
        } } }
    }
    post {
        success {
            emailext attachLog: false, to: '8566935139@msg.fi.google.com', subject: "", body: "Jenkins: Deploying ${env.JOB_BASE_NAME} (${env.BUILD_DISPLAY_NAME}) successful"
        }
        unsuccessful {
            emailext attachLog: false, to: '8566935139@msg.fi.google.com', subject: "", body: "Jenkins: ${env.JOB_NAME}:${env.BUILD_DISPLAY_NAME} unsuccessful!"
            emailext attachLog: true, to: 'zack@klodnicki.com', mimeType: 'text/html', subject: "Jenkins: ${env.JOB_NAME} unsuccessful!", body: "<html><body>Job <b>${env.JOB_NAME}</b> build <a href=\"${env.BUILD_URL}\">${env.BUILD_DISPLAY_NAME}</a> failed.</body></html>"
        }
    }
}
