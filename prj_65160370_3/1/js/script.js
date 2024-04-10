new Vue({
    el: '#app',
    data: {
        questions: [
            { question: "มหาวิทยาลัยบรูพาอยู่จังหวัดอะไร?", answer: "ชลบุรี" },
            { question: "ทะเลที่อยู่ติดมหาวิทยาลัยบรูพาคือ?", answer: "บางแสน" },
            { question: "ประเพณีอะไรที่จัดในชลบุรี?", answer: "ประเพณีวิ่งควาย"},
            { question: "ของหวานที่โด่งดังในชลบุรีคือ?", answer: "ข้าวหลาม" },
            { question: "ภูเขาที่อยู่ริมทะเลที่ตั้งศาลเจ้าอันศักดิ์สิทธิ์คือ?", answer: "เขาสามมุก" }
        ],
        currentQuestionIndex: 0,
        userAnswer: '',
        result: '',
        isCorrect: false
    },
    computed: {
        currentQuestion() {
            return this.questions[this.currentQuestionIndex];
        }
    },
    methods: {
      checkAnswer() {
        const userAnswer = this.userAnswer.trim().toLowerCase();
        const correctAnswer = this.currentQuestion.answer.toLowerCase();
    
        if (userAnswer === correctAnswer) {
          this.result = "Correct!";
          this.isCorrect = true;
          
          
          this.currentQuestionIndex++;
    
          
          if (this.currentQuestionIndex >= this.questions.length) {
            this.result = "Congratulations! You have completed all questions.";
            return; 
          }
    
          
          this.result = '';
          this.userAnswer = '';
        } else {
          this.result = "Incorrect. The correct answer is: " + this.currentQuestion.answer;
          this.isCorrect = false;
        }
      }
    }
});