// src/components/Features.jsx
import React from 'react';
import icon1 from '../assets/code.png';
import icon2 from '../assets/settings.png';
import icon3 from '../assets/source.png';
import icon4 from '../assets/tool.png';

function Icons() {
  return (
    <section className="features">
      <div>
        <img src={icon1} alt="Feature Icon" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src={icon2} alt="Feature Icon" />
        <h3>Components</h3>
        <p>Build encapsulated compronents that manage their state.</p>
      </div>
      <div>
        <img src={icon3} alt="Feature Icon" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's</p>
      </div>
      <div>
        <img src={icon4} alt="Feature Icon" />
        <h3>JSX</h3>
        <p>Statically-typed designed to run on modern browsers</p>
      </div>
    </section>
  );
}

export default Icons;
