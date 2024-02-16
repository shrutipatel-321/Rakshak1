const Question = require('../models/Questions');

const quesController = {
    getQues: async (req, res) => {
        try{
            const questions = await Question.find();
            res.status(200).json({ questions });
        }
        catch(error){
            console.error('Error fetching questions:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    submitAns: async (req, res) => {
        try{
            const answers = req.body.answers;
            const questions = await Question.find();
            var score = 0;
            for(var i=0; i<1; i++){
                // console.log(questions[i].answer)
                // console.log(answers.answers[i])
                if(answers[i]==questions[i].answer){
                    score++;
                }
            }
            var result="pass";
            if(score<=5){
                result="failed";
            }

            res.status(200).json({ result });
            // if passed user will send driving license Information which will be updated in usermodel using editUser api, and pdf generated in fontend using jsPDF
            
        }
        catch(error){
            console.error('Error Submiting Answers:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = quesController;