const elements = {
    "nodes": [
        {
            "data": {
                "id": "259814101",
                "name": "axonal loss",
                "type": "disease"
            }
        },
        {
            "data": {
                "id": "257045501",
                "name": "demyelination",
                "type": "disease"
            }
        },
        {
            "data": {
                "id": "107362501",
                "name": "partial epilepsy",
                "type": "disease"
            }
        },
        {
            "data": {
                "id": "260996301",
                "name": "myokymia",
                "type": "disease"
            }
        },
        {
            "data": {
                "id": "260955401",
                "name": "ataxic episodes",
                "type": "disease"
            }
        },
        {
            "data": {
                "id": "831004",
                "name": "R120Q",
                "type": "variant"
            }
        },
        {
            "data": {
                "id": "6077004",
                "name": "Q163X",
                "type": "variant"
            }
        },
        {
            "data": {
                "id": "107293601",
                "name": "colorectal adenomas",
                "type": "disease"
            }
        },
        {
            "data": {
                "id": "3587804",
                "name": "E1317Q",
                "type": "variant"
            }
        },
        {
            "data": {
                "id": "4683804",
                "name": "G724C",
                "type": "variant"
            }
        }
    ],
    "edges": [
        {
            "data": {
                "source": "831004",
                "target": "257045501",
                "name": "cause",
                "orig_sent": "Both the Q163X and the R120Q mutation cause demyelination and axonal loss."
            }
        },
        {
            "data": {
                "source": "3587804",
                "target": "107293601",
                "name": "associated with",
                "orig_sent": "E1317Q is significantly associated with multiple colorectal adenomas (OR = 11."
            }
        },
        {
            "data": {
                "source": "6077004",
                "target": "259814101",
                "name": "cause",
                "orig_sent": "Both the Q163X and the R120Q mutation cause demyelination and axonal loss."
            }
        },
        {
            "data": {
                "source": "4683804",
                "target": "260996301",
                "name": "exhibit",
                "orig_sent": "(KCNA1 G724C) exhibit partial epilepsy and myokymia but no ataxic episodes, supporting the suggestion that there is an association between mutations of KCNA1 and epilepsy."
            }
        },
        {
            "data": {
                "source": "831004",
                "target": "259814101",
                "name": "cause",
                "orig_sent": "Both the Q163X and the R120Q mutation cause demyelination and axonal loss."
            }
        },
        {
            "data": {
                "source": "4683804",
                "target": "107362501",
                "name": "exhibit",
                "orig_sent": "(KCNA1 G724C) exhibit partial epilepsy and myokymia but no ataxic episodes, supporting the suggestion that there is an association between mutations of KCNA1 and epilepsy."
            }
        },
        {
            "data": {
                "source": "4683804",
                "target": "260955401",
                "name": "exhibit",
                "orig_sent": "(KCNA1 G724C) exhibit partial epilepsy and myokymia but no ataxic episodes, supporting the suggestion that there is an association between mutations of KCNA1 and epilepsy."
            }
        },
        {
            "data": {
                "source": "6077004",
                "target": "257045501",
                "name": "cause",
                "orig_sent": "Both the Q163X and the R120Q mutation cause demyelination and axonal loss."
            }
        }
    ]
};

// process data
elements.nodes.forEach((n) => {
  const data = n.data;

  data.NodeTypeFormatted = data.NodeType;

  // the source data for types isn't formatted well for reading
  if( data.NodeTypeFormatted === 'RedWine' ){
    data.NodeTypeFormatted = 'Red Wine';
  } else if( data.NodeTypeFormatted === 'WhiteWine' ){
    data.NodeTypeFormatted = 'White Wine';
  } else if( data.NodeTypeFormatted === 'CheeseType' ){
    data.NodeTypeFormatted = 'Cheese Type';
  }

  // save original position for use in animated layouts
  n.data.orgPos = {
    x: n.position.x,
    y: n.position.y
  };

  // zero width space after dashes to allow for line breaking
  data.name = data.name.replace(/[-]/g, '-\u200B');
});

export default elements;