import React, { Component } from 'react';
import Faq from 'react-faq-component';
import Prism from "prismjs";

const htmlcode = `import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.0"
    }]
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Faq data={data}/>
      </div>
    )
  }
}
`;

const dataJSON = {
  title: "FAQ title",
  rows: [
    {
      title: "Question 1",
      content: "Answer 1"
    },
    {
      title: "Question 2",
      content: "Answer 2"
    }
  ]
}

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, 
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. 
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae. 
              Fusce sed commodo purus, at tempus turpis.`
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `
    },
    {
      title: "What is the package version",
      content: "v1.0.0"
    }]
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>react-faq-component demo</h1>
        <section className="badges">
          <a href="https://github.com/binodswain/react-faq-component">
            <img src="https://badgen.net/github/release/binodswain/react-faq-component" alt="release"/>
          </a>
          <a href="https://github.com/binodswain/react-faq-component/issues">
            <img src="https://badgen.net/github/issues/binodswain/react-faq-component" alt="issues"/>
          </a>
          <a href="https://github.com/binodswain/react-faq-component/blob/master/LICENSE">
            <img src="https://badgen.net/github/license/binodswain/react-faq-component" alt="license"/>
          </a>
          <a href="https://github.com/binodswain/react-faq-component/commits/">
            <img src="https://badgen.net/github/last-commit/binodswain/react-faq-component" alt="last commit"/>
          </a>
        </section>
        <div className="faq-wrapper">
          <Faq data={data} />
        </div>
        <hr/>
        <section className="usage">
          <h3>Usage</h3>
          <div>Install the package.</div>
          <pre>
            <code className="language-markup">
              npm install --save react-faq-component
            </code>
          </pre>
          <div>Import the package.</div>
          <pre>
            <code className="language-markup">
              import Faq from 'react-faq-component';
            </code>
          </pre>
          <br/>
          <div>example: </div><br/>
          <pre className="line-numbers">
            <code className="language-js">
              {htmlcode}
            </code>
          </pre>

        </section>

        <section className="dataformat">
          <h3>Data format</h3>
          <p>The data passed into <strong>react-faq-component</strong> is an object having two keys i.e <strong>title</strong> (String) and <strong>rows</strong> (array of objects).
            
          </p>
          <pre className="line-numbers">
            <code className="language-json">
              {JSON.stringify(dataJSON, null, 4)}
            </code>
          </pre>
        </section>
      </div>
    )
  }
}
