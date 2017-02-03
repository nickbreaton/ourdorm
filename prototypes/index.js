import PROPOSAL from '../docs/PROPOSAL.md';
import marked from 'marked';
import 'github-markdown-css';

const main = document.querySelector('main');

marked.setOptions({
  gfm: true
});

marked(PROPOSAL, (err, content) => {
  main.style.maxWidth = '800px';
  main.style.margin = 'auto';
  main.className = 'markdown-body';
  main.innerHTML = content;
});
