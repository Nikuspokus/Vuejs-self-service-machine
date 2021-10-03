<template>
  <div>
    <template v-if="this.question">
      <h1 v-html="this.question"></h1>
      <template v-for="(answer, index) in this.answers" :key="index">
        <input
          type="radio"
          name="options"
          :value="answer"
          v-model="chosen_answer"
        />
        <label v-html="answer"></label><br />
      </template>
      <button class="send" type="button" @click="this.submitAnswer">
        Send
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswers: undefined,
      chosen_answer: undefined,
    };
  },
  computed: {
    answers() {
      var answers = JSON.parse(JSON.stringify(this.incorrectAnswers));
      answers.splice(
        Math.round(Math.random() * answers.length),
        0,
        this.correctAnswers
      );
      return answers;
    },
  },

  methods: {
    submitAnswer() {
      if (!this.chosen_answer) {
        alert('Pick one of the options')
      } else {
        if (this.chosen_answer == this.correctAnswers) {
          alert('You got it right !')
        } else {
          alert('You got it wrong !')
        }
      }
    },
  },

  created() {
    this.axios
      .get("https://opentdb.com/api.php?amount=1&category=20&difficulty=easy")
      .then((response) => {
        this.question = response.data.results[0].question;
        this.incorrectAnswers = response.data.results[0].incorrect_answers;
        this.correctAnswers = response.data.results[0].correct_answer;
      });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;

  input[type="radio"] {
    margin: 12px 4px;
  }

  button.send {
    margin-top: 12px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: #fff;
    background-color: #1867c0;
    border: 1px solid #1867c0;
    cursor: pointer;
  }
}
</style>
