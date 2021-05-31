import { h, Component } from 'preact';
import { Controller } from '../controller';
import Cytoscape from 'cytoscape';
import { elements, elements_stanford, elements_uw, elements_spacy_abstract, elements_spacy_abstract_drug_disease, style } from '../cy-conf';
import CytoscapeComponent from './cytoscape';
import { isDev } from '../env';
import { NodeInfo } from './node-info';
import { Menu } from './menu';

class AppComponent extends Component {
  constructor(props){
    super(props);
    
    let cy = new Cytoscape();

    console.log(props.data);

    if (props.data === 'spacy') {
      cy = new Cytoscape({
        elements,
        style,
        layout: { 
          name: 'preset',
        },
        selectionType: 'single',
        boxSelectionEnabled: false
      });
    }
    else if (props.data === 'spacy_abstract') {
      cy = new Cytoscape({
        elements: elements_spacy_abstract,
        style,
        layout: { 
          name: 'preset',
        },
        selectionType: 'single',
        boxSelectionEnabled: false
      });
    }
    else if (props.data === 'spacy_abstract_drug_disease') {
      cy = new Cytoscape({
        elements: elements_spacy_abstract_drug_disease,
        style,
        layout: { 
          name: 'preset',
        },
        selectionType: 'single',
        boxSelectionEnabled: false
      });
    }
    else if (props.data === 'stanford'){
      cy = new Cytoscape({
        elements: elements_stanford,
        style,
        layout: { 
          name: 'preset',
        },
        selectionType: 'single',
        boxSelectionEnabled: false
      });
    }
    else if (props.data === 'uw'){
      cy = new Cytoscape({
        elements: elements_uw,
        style,
        layout: { 
          name: 'preset',
        },
        selectionType: 'single',
        boxSelectionEnabled: false
      });
    }

    cy.nodes().panify().ungrabify();

    const controller = new Controller({ cy });
    const bus = controller.bus;

    if( isDev ){
      window.cy = cy;
      window.controller = controller;
    }

    this.state = { controller, cy };

    bus.on('showInfo', this.onShowInfo = (node => {
      this.setState({ infoNode: node });
    }));

    bus.on('hideInfo', this.onHideInfo = (() => {
      this.setState({ infoNode: null });
    }));    
  }

  componentWillUnmount(){
    const bus = this.state.controller.bus;

    bus.removeListener('showInfo', this.onShowInfo);
    bus.removeListener('hideInfo', this.onHideInfo);
  }

  render(){
    const { cy, controller, infoNode } = this.state;

    return h('div', { class: 'app' }, [
      h(CytoscapeComponent, { cy, controller }),

      infoNode ? (
        h('div', { class: 'app-node-info' }, [
          h(NodeInfo, { node: infoNode })
        ])
      ) : null,

      h(Menu, { controller })
    ]);
  }
}

export default AppComponent;
export { AppComponent };