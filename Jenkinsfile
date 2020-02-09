def remote = [:]
remote.name = 'gizmo'
remote.host = '127.0.0.1'
remote.allowAnyHosts = true

pipeline {
    agent any
    environment {
        CREDENTIALS = credentials('gizmo-ci-com-stargazeobx-new')
    }
    stages {
        stage('Notify Start') { steps { script {
            def from = (env.GIT_PREVIOUS_SUCCESSFUL_COMMIT) ? GIT_PREVIOUS_SUCCESSFUL_COMMIT : 'HEAD'
            def gitLog = sh(returnStdout: true, script: "git log --pretty=format:%s ${from}..${GIT_COMMIT}")
            emailext attachLog: false, to: '8566935139@msg.fi.google.com', subject: "", body: "Jenkins: Deploying ${env.JOB_BASE_NAME} (${env.BUILD_DISPLAY_NAME}): \n\n${gitLog}"
        } } }
        stage('Setup') { steps { script {
            remote.user = env.CREDENTIALS_USR
            remote.identityFile = env.CREDENTIALS
            sh 'git clean -fd'
        } } }
        stage('`npm i`') {
            environment {
                NODE_ENV = 'PRODUCTION'
            }
            steps { script {
                sh 'cd client && npm i'
            } }
        }
        stage('Build') {
            environment {
                NODE_ENV = 'PRODUCTION'
            }
            steps { script {
                sh 'cd client && npm run build -- --prod'
            } }
        }
        stage('Deploy') {
            steps { script {
                sshCommand remote: remote, command: 'rm -rf www.new'
                sh 'mv client/dist/stargazeobx ./www.new'
                sshPut remote: remote, from: 'www.new', into: '.'
                sshCommand remote: remote, command: '''
                    ls -l &&
                    mkdir -p www &&
                    mv www www.old &&
                    mv www.new www &&
                    ls -l &&
                    rm -rf www.old
                '''
            } }
        }
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
