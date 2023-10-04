pipeline {
    agent any
    
    environment {
        BROWSER = params.BROWSER
    }
    
    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/integration/**/**', description: 'Ej: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }
    
    stages {
        stage('Build') {
            steps {
                echo "Building the application"
                // Add your build steps here
            }
        }
        
        stage('Testing') {
            steps {
                ansiColor('xterm') // Enable ANSI color support
                bat "npm i" // Install dependencies
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}" // Run Cypress tests
            }
        }
        
        stage('Deploy') {
            steps {
                echo "Deploying"
                // Add your deployment steps here
            }
        }
    }
}
