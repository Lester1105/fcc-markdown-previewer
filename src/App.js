import './App.css';
import React from 'react';
import {Container, Form, Row} from 'react-bootstrap'

const placeholder = `# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.org), and
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


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

let marked=require('marked');
marked.setOptions({
  breaks:true
});
const renderer=new marked.Renderer();
function App() {
  const [text,setText]=React.useState(placeholder);
  
  return (
    <div className="App">
     <Container>
     <Form>
       
     <Form.Group className="mb-3" controlId="FormControlTextarea">
     <Row>
      <Form.Label id="label"><h1>Markdown Input</h1></Form.Label>
    </Row>
    <Row>
      <Form.Control as="textarea" id="editor"
     onChange={(e)=>setText(e.target.value)} placeholder={text} rows={10} value={text}/>
    </Row>
  </Form.Group>
     </Form>
     <Row>
       <h1 id="label">Markdown Output</h1>
     </Row>
     <Row>
       <Output markdown={text}/>
     </Row>
     </Container>
     
    </div>
  );
}

function Output({markdown}){
  return (
    <div dangerouslySetInnerHTML={{__html: marked(markdown,{renderer: renderer}),}} id="preview">

    </div>
  )
}

export default App;
