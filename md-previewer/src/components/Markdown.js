import React, { PureComponent } from "react";
import marked from "marked";
import { Button, Input } from "reactstrap";
import "./Markdown.css";
export default class Markdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mdText: this.placeholder,
      htmlText: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);

    marked.setOptions({
      breaks: true
    });
  }

  changeHandler(event) {
    this.setState({ mdText: event.target.value });
  }

  clickHandler() {
    this.setState({ mdText: ` ` });
  }

  placeholder = `# Welcome to my new React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `;

  render() {
    let markedHtml = { __html: marked(this.state.mdText) };
    return (
      <div id="container">
        <div id="col1"><div id="editor-control">
          <Button size="sm" color="secondary" onClick={this.clickHandler}>
            Clear
          </Button>
          </div>
          <Input
            type="textarea"
            id="editor"
            onChange={this.changeHandler}
            value={this.state.mdText}
          />
        </div>
        <div id="col2">
          <div id="preview" dangerouslySetInnerHTML={markedHtml} />
        </div>
      </div>
    );
  }
}
