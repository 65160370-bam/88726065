<template>
  <div class="container">
    <h1>Guess the Word</h1>
    <div id="question">{{ currentQuestion.question }}</div>
    <input type="text" v-model="userAnswer" placeholder="Enter your answer...">
    <button @click="checkAnswer">Check Answer</button>
    <p :class="{ 'correct': isCorrect, 'incorrect': !isCorrect }">{{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { question: "มหาวิทยาลัยบรูพาอยู่จังหวัดอะไร?", answer: "ชลบุรี" },
        { question: "ทะเลที่อยู่ติดมหาวิทยาลัยบรูพาคือ?", answer: "บางแสน" },
        { question: "ประเพณีอะไรที่จัดในชลบุรี", answer: "ประเพณีวิ่งควาย" },
        { question: "ของหวานที่โด่งดังในชลบุรีคือ?", answer: "ข้าวหลาม" },
        { question: "ภูเขาที่อยู่ริมทะเลที่ตั้งศาลเจ้าอันศักดิ์สิทธิ์คือ?", answer: "เขาสามมุก" }
      ],
      currentQuestionIndex: 0,
      userAnswer: '',
      result: '',
      isCorrect: false
    };
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
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
}

input[type="text"] {
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.correct {
  color: green;
}

.incorrect {
  color: red;
}
</style>