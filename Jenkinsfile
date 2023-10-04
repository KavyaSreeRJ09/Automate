pipeline {
    agent any
    
    environment {
        BUILD_USER = ''
    }
    
    parameters {
        choice(
            name: 'SPEC',
            choices: ['UnitTests', 'Sat2farm', 'zPerformTests'],
            description: 'Select the type of tests to run'
        )
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }
    
    stages {
        stage('Build'){
            steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
                script {
                    def specPattern
                    switch(params.SPEC) {
                        case 'UnitTests':
                            specPattern = 'cypress/e2e/UnitTest/**/*.spec.js'
                            break
                        case 'Sat2farm':
                            specPattern = 'cypress/e2e/Sat2farm/**/*.spec.js'
                            break
                        case 'zPerformTests':
                            specPattern = 'cypress/e2e/zPerformTests/**/*.spec.js'
                            break
                        default:
                            error "Invalid SPEC parameter"
                    }
                    
                    bat "npm i"
                    bat "npx cypress run --browser ${BROWSER} --spec ${specPattern}"
                }
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }
}
