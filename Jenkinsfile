node {

    stage('Version') {

    }

    stage('Environment') {

    }

    stage('Document') {

    }

    stage('Compile') {

    }

    stage('Acceptance') {

    }

    stage('Conclusion') {
        def response = input message: 'What do you think?', parameters: [choice(choices: 'Yes\nNo', description: 'Proceed or Abort?',  name: 'Pass or Fail?')]

        if(response=='Yes'){
            echo "I agree!"
        } else {
            echo "Failure!"
        }
    }

}