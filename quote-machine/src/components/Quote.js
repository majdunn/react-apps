import React, { Component } from "react";
import "./Quote.css";
import { Button } from "reactstrap";
export default class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuote: "Click the button below to see a random quote!",
      currentAuthor: "MJ Dunn",
      numQuotes: 10,
      randomNum: 0
    };

    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    let howMany = Object.keys(this.quotes).length;
    let randomNum = this.state.randomNum;
    while (randomNum === this.state.randomNum) {
      randomNum = Math.floor(Math.random() * Math.floor(howMany));
    }

    let newQuote = this.quotes[randomNum].quote;
    let newAuthor = this.quotes[randomNum].author;
    this.setState({
      numQuotes: howMany,
      randomNum: randomNum,
      currentQuote: newQuote,
      currentAuthor: newAuthor
    });

    console.log("howMany: ", howMany, "randomNum: ", randomNum);
  }

  quotes = [
    { quote: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    {
      quote:
        "when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.",
      author: "Why The Lucky Stiff"
    },
    {
      quote:
        "Programs must be written for people to read, and only incidentally for machines to execute.",
      author:
        "Harold Abelson, Structure and Interpretation of Computer Programs"
    },
    {
      quote:
        "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
      author: "John Woods"
    },
    {
      quote:
        "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
      author: "Rick Cook, The Wizardry Compiled"
    },
    {
      quote:
        "Punishments include such things as flashbacks, flooding of unbearable emotions, painful body memories, flooding of memories in which the survivor perpetrated against others, self-harm, and suicide attempts.",
      author:
        "Alison Miller, Healing the Unimaginable: Treating Ritual Abuse and Mind Control"
    },
    {
      quote:
        "The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly. A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct.",
      author: "Donald E. Knuth, Selected Papers on Computer Science"
    },
    {
      quote:
        "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
      author: "Larry Niven"
    },
    {
      quote:
        "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
      author: "Muhammad Waseem"
    },
    {
      quote:
        "You've baked a really lovely cake, but then you've used dog shit for frosting.",
      author: "Steve Jobs"
    },
    {
      quote:
        "I'm not a great programmer; I'm just a good programmer with great habits.",
      author: "Kent Beck"
    },
    {
      quote: "How you look at it is pretty much how you'll see it",
      author: "Rasheed Ogunlaru"
    },
    {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler"
    },
    {
      quote: "Truth can only be found in one place: the code.",
      author:
        "Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship"
    },
    {
      quote:
        "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
      author: "Brian Kernighan"
    },
    {
      quote:
        "A language that doesn't affect the way you think about programming is not worth knowing.",
      author: "Alan J. Perlis"
    },
    {
      quote:
        "On two occasions, I have been asked [by members of Parliament], 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able to rightly apprehend the kind of confusion of ideas that could provoke such a question.",
      author: "Charles Babbage"
    },
    {
      quote:
        "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
      author: "Joseph Weizenbaum"
    },
    {
      quote:
        "Walking on water and developing software from a specification are easy if both are frozen.",
      author: "Edward V. Berard"
    },
    {
      quote:
        "Perl – The only language that looks the same before and after RSA encryption.",
      author: "Keith Bostic"
    },
    {
      quote:
        "The most disastrous thing that you can ever learn is your first programming language.",
      author: "Alan Kay"
    },
    {
      quote:
        "When they first built the University of California at Irvine they just put the buildings in. They did not put any sidewalks, they just planted grass. The next year, they came back and put the sidewalks where the trails were in the grass. Perl is just that kind of language. It is not designed from first principles. Perl is those sidewalks in the grass.",
      author: "Larry Wall"
    },
    {
      quote:
        "The most important property of a program is whether it accomplishes the intention of its user.",
      author: "C.A.R. Hoare"
    },
    {
      quote:
        "A computer is like a violin. You can imagine a novice trying ﬁrst a phonograph and then a violin. The latter, he says, sounds terrible. That is the argument we have heard from our humanists and most of our computer scientists. Computer programs are good, they say, for particular purposes, but they aren’t ﬂexible. Neither is a violin, or a typewriter, until you learn how to use it.",
      author: "Marvin Minsky"
    },
    {
      quote:
        "Object-oriented programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches.",
      author: "Paul Graham, Hackers & Painters: Big Ideas from the Computer Age"
    },
    {
      quote:
        "At forty, I was too old to work as a programmer myself anymore; writing code is a young person’s job.",
      author: "Michael Crichton, Prey"
    },
    {
      quote:
        "Big Brother fills us all with the same crap. My guess is he was clever the same way everybody thinks they're clever. I tell her to type in 'password",
      author: "Chuck Palahniuk, Lullaby"
    },
    {
      quote:
        "Take positive care of your mind, and it would surely take positive care of your life.",
      author: "Edmond Mbiaka"
    }
  ];

  render() {
    return (
      <div id="quote-box">
        <p>There are {this.state.numQuotes} quotes to choose from!</p>
        <div id="quote-wrapper">
        <p id="text"><i className="icon ion-quote" /> {this.state.currentQuote}</p>
        <p id="author">{this.state.currentAuthor} </p>
        </div>
        <Button color="secondary" id="new-quote" onClick={this.getQuote}>
        <i className="icon ion-refresh" /> New Quote
        </Button>
        <Button color="secondary" id="tweet-quote" href="http://twitter.com/intent/tweet">
          <i className="icon ion-social-twitter" /> Tweet This
        </Button>
      </div>
    );
  }
}
