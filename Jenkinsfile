pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clone the source code from the repository
                git 'https://github.com/saipavanD27/my-node-app/tree/master/my-node-app.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies
                    sh 'npm install'
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    // Build the application if needed
                    sh 'npm run build' // Optional step based on your app
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'npm test'
                }
            }
        }
        
        stage('Package') {
            steps {
                script {
                    // Package the application into a Docker image (optional)
                    sh 'docker build -t my-node-app .'
                }
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline complete.'
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
